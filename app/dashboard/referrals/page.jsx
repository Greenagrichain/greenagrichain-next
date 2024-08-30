"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { IconClipboard, IconClipboardCheck } from "@tabler/icons-react";

import useAuthContext from "@/lib/hooks/useAuthContext";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export default function Referrals() {
  const { authData } = useAuthContext();
  return (
    <div>
      <Card className="w-fit mx-auto">
        <CardHeader>
          <CardTitle>Referral Earnings</CardTitle>
          <CardDescription>
            Earn more and unlock special offers when you invite your friends.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Referrer Link: </p>
          <CopyContentToClipboard
            data={`http://greenagrichain.com/register?ref=${authData.token.slice(
              0,
              9
            )}`}
            className="bg-neutral-200"
          />

          <div className="flex gap-1 mt-4 items-center">
            <p>Referrer Count: </p>
            <p className="p-1 bg-neutral-200 rounded inline-flex text-sm border items-center gap-2">
              0
            </p>
          </div>
        </CardContent>
      </Card>

      <ReferrerList />
    </div>
  );
}

function CopyContentToClipboard({ data, className = "" }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    window.navigator.clipboard.writeText(data);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  return (
    <div
      className={cn(
        "px-2 py-1 rounded-lg inline-flex text-sm border items-center gap-2",
        className
      )}
    >
      <a
        href={data}
        rel="noreferrer"
        className="hover:underline"
        target="_blank"
      >
        {data}
      </a>
      <Button variant="outline" size="icon" onClick={handleCopy}>
        {copied ? (
          <IconClipboardCheck size={20} />
        ) : (
          <IconClipboard size={20} />
        )}
      </Button>
    </div>
  );
}

function ReferrerList() {
  return (
    <div className="m-4">
      <h3 className="text-center text-lg mt-10">Your Referrer List</h3>
      <Separator className="my-3" />
      <Table>
        <TableCaption>You have 0 accepted referrals</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium"></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
