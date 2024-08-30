"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { IconRefresh } from "@tabler/icons-react";

export default function KYC() {
  const [kycInfo, setKycInfo] = useState({
    method: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Card className="self-center p-4 mt-10">
      <CardHeader>
        <CardTitle className="text-xl font-bold">KYC Verification</CardTitle>
        <CardDescription className="text-muted-foreground text-sm leading-10">
          Verify your account to unlock special exclusive features
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <Select
            value={kycInfo.method}
            onValueChange={(e) => setKycInfo((pdd) => ({ ...pdd, method: e }))}
            name="method"
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a verification method" />
            </SelectTrigger>
            <SelectContent>
              {["Drivers License", "National ID", "Passport"].map(
                (method, _) => (
                  <SelectItem value={method} key={method + _}>
                    {method}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Front page/view</Label>
            <Input id="picture" type="file" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Back page/view</Label>
            <Input id="picture" type="file" />
          </div>

          <Button
            onClick={async () => {
              setIsLoading(true);
              await new Promise((res) => setTimeout(res, 5000));

              toast({
                title: "Uh oh! Something went wrong.",
                description:
                  "We had a problem with your request. Please try again later",
                variant: "destructive",
              });
              setIsLoading(false);
            }}
            disabled={isLoading}
          >
            {isLoading && <IconRefresh className="animate-spin mr-1" />}
            Verify
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
