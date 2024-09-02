import { FullLoader } from "@/components/Loader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useAuthContext from "@/lib/hooks/useAuthContext";
import { cn } from "@/lib/utils";
import React from "react";
import { toast } from "sonner";
import useSWR from "swr";

export default function KYCStatus({ setIsFormActive }) {
  const { authData: user } = useAuthContext();
  const { data, isLoading, error } = useSWR(`/api/kyc`);

  if (error) {
    toast.error("Failed to fetch required data: " + error.message, {
      description: "Please reload the page.",
      id: "error",
    });
  }

  let status = data.data
    .find((kyc) => kyc.userId === user.id)
    ?.status.toUpperCase();

  return (
    <div>
      <h3 className="text-xl text-center mb-2">KYC Status</h3>
      <div className="relative p-4 border-2 text-center border-dashed rounded-lg">
        {isLoading ? (
          <FullLoader loaderClassName="w-6 h-6" />
        ) : !status ? (
          <>
            <p>No KYC Record Found</p>
            <Button className="mt-4" onClick={() => setIsFormActive(true)}>
              Create KYC Record
            </Button>
          </>
        ) : (
          <Badge
            className={cn(
              "text-base px-7 py-3",
              { "bg-green-800": status === "VERIFIED" },
              { "bg-cyan-600": status === "REVIEWING" },
              { "bg-yellow-600": status === "PENDING" }
            )}
          >
            {status}
          </Badge>
        )}
      </div>
    </div>
  );
}
