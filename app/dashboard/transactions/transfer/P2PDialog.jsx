import { useState } from "react";
import Loader, { FullLoader } from "@/components/Loader";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import useSWR from "swr";
import axiosInstance from "@/lib/axiosInstance";
import useAuthContext from "@/lib/hooks/useAuthContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function P2PDialog({
  formData: { receiverAddressType, receiverAddress, amount },
  shouldFetchData,
  setShouldFetchData,
}) {
  const {
    data: receiver = {},
    isLoading: isFetching,
    error: fetchingError,
  } = useSWR(
    shouldFetchData && receiverAddressType === "id"
      ? `/api/users/${receiverAddress}`
      : shouldFetchData && receiverAddressType === "email"
      ? `/api/users/email/${receiverAddress}`
      : null
  );

  const [isTransferring, setIsTransferring] = useState(false);
  const [password, setPassword] = useState("");
  const { authData: { user } = {} } = useAuthContext();

  if (fetchingError) {
    toast.error("Error fetching required data", {
      id: "error",
      description: fetchingError.message,
    });
    setShouldFetchData(false);
  }

  if (isFetching) {
    return (
      <DialogContent>
        <Loader className="m-auto w-12 h-12 text-primary" />
      </DialogContent>
    );
  }

  async function handleTransfer() {
    setIsTransferring(true);

    try {
      const response = await axiosInstance.post("/api/transfer", {
        senderEmail: user.email,
        password,
        receiverEmail: receiver.email,
        amount,
      });

      toast.success(response.data.message);
      setShouldFetchData(false);
    } catch (error) {
      toast.error(
        "Error: " + error.response
          ? error.response.data.message
          : error.message,
        { id: "error" }
      );
    }

    setIsTransferring(false);
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          Confirm transfer to {receiver.firstname}{" "}
          {receiver.lastname || <Loader className="inline" />}
        </DialogTitle>
        <DialogDescription>
          You are about to transfer{" "}
          <span className="font-bold">
            ${parseFloat(amount | 0).toFixed(2)}
          </span>{" "}
          to{" "}
          <span className="font-bold">
            {receiver.email || <Loader className="inline" />}
          </span>
        </DialogDescription>
      </DialogHeader>

      <Label htmlFor="password">Enter your password to continue</Label>
      <Input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <DialogFooter className="sm:justify-between">
        <Button variant="outline" onClick={() => setShouldFetchData(false)}>
          Cancel
        </Button>
        <Button disabled={isTransferring} onClick={handleTransfer}>
          {isTransferring && <Loader />}
          Confirm
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

export default P2PDialog;
