"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WithdrawalHistory() {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          You have no Withdrawal History
        </h3>
        <p className="text-sm text-muted-foreground">
          You have made 0 withdrawal(s) so far
        </p>
        <div className="btn-group space-x-2">
          <Button className="mt-4" asChild>
            <Link href="transactions/withdrawal/">Withdraw</Link>
          </Button>
          <Button className="mt-4" variant="outline" asChild>
            <Link href="/transactions/deposit/">Fund account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
