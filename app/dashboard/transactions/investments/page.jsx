"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          You have 0 Investment(s) currently
        </h3>
        <p className="text-sm text-muted-foreground">
          Fund your account and buy a product now to invest
        </p>
        <div className="flex gap-2">
          <Button className="mt-4">
            <Link variant="outline" href="deposit/">
              Take me to store
            </Link>
          </Button>
          <Button className="mt-4">
            <Link href="deposit/">Fund your accounts</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
