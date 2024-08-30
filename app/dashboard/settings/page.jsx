"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          No Settings Entity Found
        </h3>
        <Button variant="outline" asChild>
          <Link href="/dashboard">Go back to dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
