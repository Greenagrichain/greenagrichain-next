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
import { Separator } from "@/components/ui/separator";

import useAuthContext from "@/lib/hooks/useAuthContext";
import CopyToClipboard from "@/components/CopyToClipboard";

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
          <CopyToClipboard
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
