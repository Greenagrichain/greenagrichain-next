"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreditCardDepositForm from "./CreditCardDepositForm";
import CryptoDepositForm from "./CryptoDepositForm";
import useAuthContext from "@/lib/hooks/useAuthContext";
import useSWR from "swr";
import { toast } from "sonner";
import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { IconAlertTriangle } from "@tabler/icons-react";
import { IconAlertTriangleFilled } from "@tabler/icons-react";
import CustomAlert from "@/components/CustomAlert";

export default function Deposit() {
  const {
    authData: { user },
  } = useAuthContext();
  const { data, error: depositsError } = useSWR(`/api/account-balances`);

  if (depositsError) {
    toast.error("Failed to fetch required data: " + depositsError.message, {
      description: "Please reload the page.",
      id: "error",
    });
  }

  return (
    <div className="my-5 p-4 flex gap-4 self-center flex-col">
      <Card className="flex flex-col text-center">
        <CardHeader>
          <CardDescription>
            Account Balance
            <p className="text-sm text-muted-foreground"></p>
          </CardDescription>
          <CardTitle className="text-4xl">
            ${data?.find((user) => user.userId === user.id)?.balance || "0.00"}
          </CardTitle>
        </CardHeader>
        <CardFooter className="mt-auto flex-col gap-2">
          <CustomAlert
            description="Note that your account balance is reflected only when your deposit
              has been verified"
            variant="warn"
            icon={<IconAlertTriangleFilled />}
          />
          <Button className="w-full">
            <Link href="/dashboard/activities/all-history">
              View Deposit History
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-min self-center">
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
              <CryptoDepositForm />
            </TabsContent>
            <TabsContent value="card">
              <CreditCardDepositForm />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
