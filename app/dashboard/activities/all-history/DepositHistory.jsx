"use client";
import { useState } from "react";
import CustomTable from "@/components/CustomTable";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import useSWR from "swr";
import { toast } from "sonner";
import useAuthContext from "@/lib/hooks/useAuthContext";
import { FullLoader } from "@/components/Loader";

export default function DepositHistory() {
  const {
    authData: { user },
  } = useAuthContext();
  const { data, error, isLoading } = useSWR(`/api/deposits?userId=${user.id}`);

  if (error) {
    toast.error("Failed to fetch required data.", {
      description: error.message,
    });
  }

  if (isLoading) return <FullLoader />;

  const labelMap = {
    id: {
      label: "ID",
      childrenClassName: "max-w-4 truncate",
    },
    amount: {
      label: "Amount",
      render: (text) => (
        <>
          <span className="font-bold">$</span>
          {text}
        </>
      ),
    },
    currency: { label: "Currency", className: "", childrenClassName: "" },
    status: {
      label: "Status",
      render: (row, col) => {
        let status = row[col].toUpperCase();
        return (
          <Badge
            className={cn(
              { "bg-green-800": status === "VERIFIED" },
              { "bg-cyan-600": status === "REVIEWING" },
              { "bg-yellow-600": status === "PENDING" }
            )}
          >
            {status}
          </Badge>
        );
      },
      childrenClassName: "max-w-4 last:text-center",
    },
  };

  return (
    <div className="">
      <CustomTable
        isLoading={true}
        data={data?.deposits}
        title="Deposit Records"
        settings={labelMap}
      />
    </div>
  );
}
