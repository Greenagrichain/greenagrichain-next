"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Transactions() {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          You have no Transactions
        </h3>
        <p className="text-sm text-muted-foreground">
          You can start investing as soon as you make a transaction.
        </p>
        <Button className="mt-4">
          <Link href="deposit/">Make a deposit</Link>
        </Button>
      </div>
    </div>
  );
}
