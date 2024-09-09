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

export default function CryptoDepositForm() {
  const [depositData, setDepositData] = useState({
    amount: "",
    crypto: "",
  });
  const { data: cryptoWallets, error: walletError } = useSWR(`/api/wallets`);

  if (walletError) {
    toast.error("Failed to fetch required data. " + walletError.message, {
      id: "error",
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
          {!cryptoWallets ? (
            <SelectItem disabled>
              <Loader className="inline" /> Fetching payment methods...
            </SelectItem>
          ) : (
            cryptoWallets.map(({ address, id, currency }) => (
              <SelectItem value={`${currency}|${address}`} key={id}>
                {currency}
              </SelectItem>
            ))
          )}
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
            Transfer of {(+depositData.amount).toFixed(2)} to{" "}
            {depositData.walletType} wallet
          </AlertDialogTitle>
          <AlertDialogDescription>
            Transfer the sum of{" "}
            <span className="font-bold text-lg">
              ${(+depositData.amount).toFixed(2)}
            </span>{" "}
            to the wallet address below and click on Verify to complete your
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
