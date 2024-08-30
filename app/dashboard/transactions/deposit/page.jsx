"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Separator } from "@/components/ui/separator";
import { IconCurrencyDollar, IconCreditCard } from "@tabler/icons-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import useAuthContext from "@/lib/hooks/useAuthContext";
import { useToast } from "@/components/ui/use-toast";
import AmericanExpressIcon from "./AmericanExpressIcon";
import MasterCardIcon from "./MasterCardIcon";
import { IconRefreshOff } from "@tabler/icons-react";

const cryptoCurrencies = [
  "Bitcoin (BTC)",
  "Ethereum (ETH)",
  "Tether (USDT)",
  "Binance Coin (BNB)",
  "USD Coin (USDC)",
  "Ripple (XRP)",
  "Cardano (ADA)",
  "Solana (SOL)",
  "Polkadot (DOT)",
  "Dogecoin (DOGE)",
  "Litecoin (LTC)",
  "Chainlink (LINK)",
  "Uniswap (UNI)",
  "Avalanche (AVAX)",
  "Polygon (MATIC)",
  "Stellar (XLM)",
  "VeChain (VET)",
  "Shiba Inu (SHIB)",
  "Cosmos (ATOM)",
  "Monero (XMR)",
];
export default function Deposit() {
  const [depositData, setDepositData] = useState({
    cryptoCurrency: "",
    amount: "",
  });

  return (
    <div className="my-6 flex justify-center">
      <Card className="w-fit">
        <CardHeader>
          <CardTitle className="text-xl">Fund your account</CardTitle>
          <CardDescription>
            Make a deposit to any of the below account to fund your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="crypto">
            <TabsList className="mb-2">
              <TabsTrigger value="card">Pay with Credit Card</TabsTrigger>
              <TabsTrigger value="crypto">Pay with Crypto Currency</TabsTrigger>
            </TabsList>
            <TabsContent value="crypto">
              <DepositCryptoForm
                depositData={depositData}
                setDepositData={setDepositData}
              />
            </TabsContent>
            <TabsContent value="card">
              <CreditCardForm />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

function DepositCryptoForm({ depositData, setDepositData }) {
  function handleDepositFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleDepositFormSubmit}>
      <Select
        value={depositData.cryptoCurrency}
        onValueChange={(e) =>
          setDepositData((pdd) => ({ ...pdd, cryptoCurrency: e }))
        }
        required
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a method" />
        </SelectTrigger>
        <SelectContent>
          {cryptoCurrencies.map((currency, _) => (
            <SelectItem value={currency} key={currency + _}>
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

      <Button type="submit">Continue</Button>
    </form>
  );
}

function CreditCardForm() {
  const {
    authData: { user },
  } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function handleCreditCardPayment() {
    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 5000));

    toast({
      title: "Uh oh! Something went wrong.",
      description: "We had a problem with your request. Please try again later",
      variant: "destructive",
    });
    setIsLoading(false);
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
        <CardDescription>
          Enter your card information to complete the payment.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* <RadioGroup
              defaultValue="visa"
              onValueChange={setSelectedCard}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { value: "visa", label: "Visa", color: "text-blue-600" },
                { value: "mastercard", label: "Mastercard", color: "text-red-500" },
                { value: "amex", label: "AmEx", color: "text-green-600" },
              ].map((card) => (
                <Label
                  key={card.value}
                  className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary ${
                    selectedCard === card.value ? "border-primary" : ""
                  }`}
                >
                  <RadioGroupItem value={card.value} id={card.value} className="sr-only" />
                  <span className={`font-bold ${card.color}`}>{card.label}</span>
                  {selectedCard === card.value && (
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  )}
                </Label>
              ))}
            </RadioGroup> */}

        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <Label htmlFor="card-number">Card Number</Label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 50 50"
            >
              <path d="M 5 7 C 2.25 7 0 9.25 0 12 L 0 38 C 0 40.75 2.25 43 5 43 L 45 43 C 47.75 43 50 40.75 50 38 L 50 12 C 50 9.25 47.75 7 45 7 Z M 5 9 L 45 9 C 46.667969 9 48 10.332031 48 12 L 48 38 C 48 39.667969 46.667969 41 45 41 L 5 41 C 3.332031 41 2 39.667969 2 38 L 2 12 C 2 10.332031 3.332031 9 5 9 Z M 29.6875 19.40625 C 26.585938 19.40625 25 20.933594 25 22.875 C 25 26.386719 29.0625 25.914063 29.0625 27.71875 C 29.0625 28.023438 28.828125 28.75 27.125 28.75 C 25.417969 28.75 24.3125 28.09375 24.3125 28.09375 L 23.78125 30.46875 C 23.78125 30.46875 24.886719 31.09375 27 31.09375 C 29.113281 31.09375 32.03125 29.476563 32.03125 27.125 C 32.03125 24.296875 27.96875 24.074219 27.96875 22.8125 C 27.96875 22.167969 28.46875 21.6875 29.9375 21.6875 C 30.890625 21.6875 31.96875 22.40625 31.96875 22.40625 L 32.46875 19.96875 C 32.46875 19.96875 31.050781 19.40625 29.6875 19.40625 Z M 16.46875 19.625 L 13.78125 27.5625 C 13.78125 27.5625 13.597656 26.886719 13.53125 26.46875 C 11.996094 23.023438 9.5 21.75 9.5 21.75 L 11.875 30.75 L 15.125 30.75 L 19.625 19.625 Z M 20.78125 19.625 L 19.03125 30.75 L 22 30.75 L 23.78125 19.625 Z M 36.8125 19.625 L 31.96875 30.75 L 34.90625 30.75 L 35.5 29.15625 L 39.1875 29.15625 L 39.5 30.75 L 42.1875 30.75 L 39.90625 19.625 Z M 6.25 19.65625 C 6.25 19.65625 12.054688 21.453125 13.40625 25.8125 L 12.40625 20.75 C 12.40625 20.75 11.976563 19.65625 10.8125 19.65625 Z M 37.9375 22.84375 L 38.75 27.03125 L 36.3125 27.03125 Z"></path>
            </svg>
          </div>
          <div className="relative">
            <Input
              id="card-number"
              placeholder="1234 5678 9012 3456"
              required
            />
            <IconCreditCard className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input id="expiry" placeholder="MM/YY" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" placeholder="123" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Name on Card</Label>
          <Input
            id="name"
            placeholder={`${user.firstname} ${user.lastname}`}
            required
          />
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <div className="flex justify-between w-full items-center">
          <Button onClick={handleCreditCardPayment} disabled={isLoading}>
            {isLoading && <IconRefreshOff className="animate-spin mr-2" />}
            Continue
          </Button>
          <p className="text-sm text-muted-foreground">Secure Payment</p>
        </div>
        <Separator className="my-2" />
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          Or pay with
        </p>
        <Separator className="my-2" />
        <div className="other-options flex gap-2  mt-4 justify-between self-stretch *:grow">
          <div className="option flex justify-center items-center">
            <Button
              variant="ghost"
              onClick={handleCreditCardPayment}
              disabled={isLoading}
            >
              <AmericanExpressIcon />
            </Button>
          </div>
          <div className="option flex justify-center items-center">
            <Button
              variant="ghost"
              onClick={handleCreditCardPayment}
              disabled={isLoading}
            >
              <MasterCardIcon />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
