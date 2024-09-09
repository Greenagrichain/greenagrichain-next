"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { IconCurrencyDollar } from "@tabler/icons-react";
import { Dialog } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import P2PDialog from "./P2PDialog";
import Msg from "@/components/Msg";

const addressTypeMapping = {
  email: "Email",
  id: "Wallet",
};

function P2P() {
  const [formData, setFormData] = useState({
    receiverAddressType: "email",
    receiverAddress: "",
    amount: "",
  });
  const [shouldFetchData, setShouldFetchData] = useState(false);
  const [error, setError] = useState("");

  function handleFormDataChange(e) {
    setFormData((fd) => ({ ...fd, [e.target.name]: e.target.value }));
  }

  function validateBeforeDialogOpen(openState) {
    if (Object.values(formData).some((val) => !val)) {
      setError("All fields are required to continue");
      setTimeout(() => setError(""), 2000);
      return;
    }

    setShouldFetchData(openState);
  }

  return (
    <div>
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-lg text-center">
            Peer 2 Peer Transfer
          </CardTitle>
          <CardDescription>Transfer funds to other users</CardDescription>
          <Separator />
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="field-group flex flex-col gap-2">
            <Select
              value={formData.receiverAddressType}
              onValueChange={(val) =>
                setFormData((fd) => ({ ...fd, receiverAddressType: val }))
              }
            >
              <SelectTrigger className="">
                Receiver&apos;s Address Type:{" "}
                <span className="font-bold">
                  {addressTypeMapping[formData.receiverAddressType]}
                </span>
              </SelectTrigger>
              <SelectContent>
                {Object.entries(addressTypeMapping).map(([prop, label]) => (
                  <SelectItem value={prop} key={prop + label}>
                    Receiver&apos;s {label} Address
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="field-group">
            <Input
              name="receiverAddress"
              id="receiverAddress"
              value={formData.receiverAddress}
              onChange={handleFormDataChange}
              placeholder={`Receiver's ${
                addressTypeMapping[formData.receiverAddressType]
              } Address`}
              required
            />
          </div>
          <div className="field-group">
            <Label htmlFor="amount" className="relative my-2 flex items-center">
              <IconCurrencyDollar className="absolute p-0.5" />
              <Input
                type="number"
                placeholder="Amount"
                name="amount"
                onChange={handleFormDataChange}
                value={formData.amount}
                className="pl-6"
                key={formData.receiverAddressType}
                required
              />
            </Label>
          </div>
          <Msg type="error" msg={error} />
        </CardContent>
        <CardFooter className="mt-auto flex-col gap-2">
          <Dialog
            open={shouldFetchData}
            onOpenChange={validateBeforeDialogOpen}
          >
            <DialogTrigger asChild>
              <Button
                className="w-full"
                // onClick={() => setShouldFetchData((sfd) => !sfd)}
              >
                Continue
              </Button>
            </DialogTrigger>

            <P2PDialog
              formData={formData}
              shouldFetchData={shouldFetchData}
              setShouldFetchData={setShouldFetchData}
            />
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
}

export default P2P;
