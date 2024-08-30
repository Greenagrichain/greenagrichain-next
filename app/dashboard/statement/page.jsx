"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          You have no Transaction Records
        </h3>
        <p className="text-sm text-muted-foreground">
          You need transaction records to generate a statement.
        </p>
        <Button className="mt-4">
          <Link href="/dashbaord/transaction">Make a transaction</Link>
        </Button>
      </div>
    </div>
  );
}
