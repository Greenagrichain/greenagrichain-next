"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { IconCurrencyDollar, IconCreditCard } from "@tabler/icons-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import CopyToClipboard from "@/components/CopyToClipboard";
import Loader, { FullLoader } from "@/components/Loader";
import { toast } from "sonner";
import useAuthContext from "@/lib/hooks/useAuthContext";
import axiosInstance, { axiosFetcher } from "@/lib/axiosInstance";
import Msg from "@/components/Msg";
import useSWR from "swr";

const cryptoWalletsInitial = {
  "Bitcoin (BTC)": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  "Ethereum (ETH)": "0x32Be343B94f860124dC4fEe278FDCBD38C102D88",
  "Tether (USDT)": "0x8D9eF0a68fE41e3dB5D0b44F7E4828BD52b6d5B6",
  "Binance Coin (BNB)": "bnb1g4kz34jxlh9s4d9c8qk4rll3x5c3s24hu2ryj6",
  "USD Coin (USDC)": "0xA0b86991c6218b36c1d19D4a2e9EB0CE3606EB48",
  "Ripple (XRP)": "r9L4e6FrY1F5pmSe8mXy55DUPKKmgBSB6Q",
  "Cardano (ADA)":
    "addr1q9gx2xp9c72rr4jc5d84n0gpn9g6g5jpz66tz5t8ygf43hcklj5q4tdt7k2ly2sgflwz8rcv79u90l4u6w4gf5t0s8l30tghm5",
  "Solana (SOL)": "3M7EppHn1nJ4d2nX6YY8n3o5ciKFMkFvcqAEw5xw9h9T",
  "Polkadot (DOT)": "14K3crjXc4b3Mxe6SP6c9o6SwqC5d8yTsS9v6uXnYNVS",
  "Dogecoin (DOGE)": "D7M8xU59uY7UohYZr9FzHeY5VqF2Jx7d9r",
  "Litecoin (LTC)": "LfpA1j1EjZP3kEKnKChs3ktFtZPC3eQnK2n6xNCA3hZ9",
  "Chainlink (LINK)": "0x514910771AF9Ca656af840dff83E8264EcF986CA",
  "Uniswap (UNI)": "0x5C69bEe701ef814a2F4E9d7F746c45dA6B60a8C4",
  "Avalanche (AVAX)": "X-avax1h8hv7cmhs0pnhrfyep8zw8gt6syqhwdyk04efk",
  "Polygon (MATIC)": "0x0000000000000000000000000000000000001010",
  "Stellar (XLM)": "GAS4CHYS5PIKQ3NWX6VGBEZQKBA3JREASBTSKLEYYPP5UHR6ZIRYP6G7",
  "VeChain (VET)": "0xE8e0E6B6A9D60a1D8823E741A9a1D0F3F5b8D5A7",
  "Shiba Inu (SHIB)": "0x95aD61b0a150d79219dCF64E1E8C02F5D2B9D3F4",
  "Cosmos (ATOM)": "cosmos1kfw8m0nm3hmf8g77z9hzj06dxt9u6ry5tk5pcc",
  "Monero (XMR)":
    "49s1ShmQsA6tnW1bErhbC64FfArpXx3Gz8tkAxhBHziv2ct3CRP9YmNL2p1UVY3fWoLU1gK8bqgy3sA3AKD5VwKP3kmhbT5Q6cCH",
};

export default function CryptoDepositForm() {
  const [depositData, setDepositData] = useState({
    amount: "",
    crypto: "",
  });
  const { data: cryptoWallets, error: walletError } = useSWR(`/api/wallets`);

  if (walletError) {
    toast.error("Failed to fetch required data. " + error.message, {
      description: "Please reload the page.",
    });
  }

  return (
    <div>
      <Select
        name="cryptoWallet"
        value={depositData.crypto}
        onValueChange={(e) => setDepositData((pdd) => ({ ...pdd, crypto: e }))}
        required
      >
        <SelectTrigger>
          <SelectValue placeholder="Select payment method" />
        </SelectTrigger>
        <SelectContent>
          {(cryptoWallets || []).map(({ address, id, currency }) => (
            <SelectItem value={`${currency}|${address}`} key={id}>
              {currency}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Label htmlFor="amount" className="relative my-2 flex items-center">
        <IconCurrencyDollar className="absolute p-0.5" />
        <Input
          type="number"
          placeholder="Amount"
          name="amount"
          onChange={(e) =>
            setDepositData((pdd) => ({
              ...pdd,
              amount: e.target.value,
            }))
          }
          value={depositData.amount}
          className="pl-6"
          required
        />
      </Label>

      <VerifyPaymentDialogue depositData={depositData} />
    </div>
  );
}

function VerifyPaymentDialogue({ depositData }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [isVerifing, setIsVerifing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { authData } = useAuthContext();

  async function handleDepositDataSubmit(e) {
    e.preventDefault();
    if (success) return;
    setIsVerifing(true);

    // Make Request
    try {
      const [currency, walletAddress] = depositData.crypto.split("|");
      const response = await axiosInstance.post("/api/deposit", {
        userId: authData.user.id,
        walletAddress,
        amount: depositData.amount,
        currency,
      });

      setSuccess(response.data.message);
      setTimeout(() => {
        setSuccess("");
        setIsDialogOpen(false);
        toast.success(response.data.message);
      }, 2000);
      console.log(response);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
      setTimeout(() => setError(""), 2000);
      console.log(error);
    }

    setIsVerifing(false);
  }

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger asChild>
        <Button
          onClick={(e) => {
            e.preventDefault();
            if (!depositData.amount || !depositData.crypto) {
              return toast.error("Wallet type and Amount are required!", {
                position: "top-center",
              });
            }

            setIsDialogOpen(true);
          }}
          className="w-full"
        >
          Continue
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">
            Transfer of {depositData.amount} to {depositData.walletType} wallet
          </AlertDialogTitle>
          <AlertDialogDescription>
            Transfer the sum of{" "}
            <span className="font-bold text-lg">${depositData.amount}</span> to
            the wallet address below and click on Verify to complete your
            deposit
          </AlertDialogDescription>
        </AlertDialogHeader>
        <CopyToClipboard data={depositData.crypto.split("|")[1]} />
        <Msg type="error" msg={error} />
        <Msg type="success" msg={success} />
        <AlertDialogFooter className="!justify-between">
          <AlertDialogCancel disabled={isVerifing}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={isVerifing}
            onClick={handleDepositDataSubmit}
            className="flex gap-1"
          >
            {isVerifing && <Loader />}
            Verify
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
