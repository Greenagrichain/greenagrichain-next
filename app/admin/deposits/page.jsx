"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button, buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import { IconEdit } from "@tabler/icons-react";
import DepositsTable from "./DepositsTable";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import DialogDetails from "@/components/DialogDetails";

export default function Deposits() {
  const [viewUser, setViewUser] = useState(false);

  return (
    <div>
      <DepositsTable
        actionSettings={{
          label: "Actions",
          render: (row, col) => {
            return (
              <Dialog>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={cn(
                      buttonVariants({ variant: "primary", size: "icon" }),
                      "focus-visible:ring-0"
                    )}
                  >
                    <IconEdit />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onSelect={() => {
                        navigator.clipboard.writeText(row.walletAddress);
                        toast.success("Copied wallet address", {
                          duration: 1500,
                        });
                      }}
                    >
                      Copy wallet address
                    </DropdownMenuItem>
                    <DialogTrigger asChild>
                      <DropdownMenuItem onSelect={() => setViewUser(false)}>
                        View Deposit Details
                      </DropdownMenuItem>
                    </DialogTrigger>
                    <DialogTrigger asChild>
                      <DropdownMenuItem onSelect={() => setViewUser(true)}>
                        View User Details
                      </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem onSelect={() => console.log(row)}>
                      Add deposit to user&apos;s balance
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DialogDetails
                  details={
                    viewUser
                      ? row.user
                      : {
                          id: row.id,
                          "user id": row.userId,
                          username: `${row.user.firstname} ${row.user.lastname}`,
                          email: row.user.email,
                          "KYC status": row.user.kycVerified,
                          "Deposit status": row.status.toUpperCase(),
                          "Creation date": new Date(
                            row.createdAt
                          ).toDateString(),
                          "Wallet Address": row.walletAddress,
                        }
                  }
                  title={`${viewUser ? "Users" : "Deposits"} Info`}
                />
              </Dialog>
            );
          },
        }}
      />
    </div>
  );
}

function ActionsRenderer(row, col) {
  console.log(row, col);
  return <p>Hello</p>;
}
