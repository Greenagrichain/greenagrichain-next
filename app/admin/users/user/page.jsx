"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconChevronsLeft, IconChevronLeft } from "@tabler/icons-react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import UserDetails from "./UserDetails";

const actions = [
  { label: "Edit KYC Status" },
  { label: "Update Account Balance" },
];
export default function UserManager() {
  const searchParams = useSearchParams();
  const user = Object.fromEntries(searchParams.entries());

  return (
    <div className="p-4">
      <Button asChild variant="outline" className="sticky top-8">
        <Link href="/admin/users">
          <IconChevronLeft />
          Go back
        </Link>
      </Button>

      <Card className="w-max mx-auto my-6">
        <CardHeader>
          <CardTitle className="text-center">
            <span className="font-normal  italic text-sm m-2">Viewing: </span>
            {user.firstname} {user.lastname}
          </CardTitle>
          <hr />
          <CardDescription className="flex justify-between gap-10">
            <div className="label">
              <span className="font-bold">Email: </span>
              <br />
              {user.email}
            </div>
            <div className="label">
              <span className="font-bold">Role: </span>
              <br />
              {user.role}
            </div>
          </CardDescription>
          <hr />
        </CardHeader>
        <CardContent className="space-y-1">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">View full details</Button>
            </DialogTrigger>
            <UserDetails id={user.id} />
          </Dialog>

          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select an action" />
            </SelectTrigger>
            <SelectContent>
              {actions.map((action) => (
                <SelectItem key={action.label} value={action.label}>
                  {action.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  );
}
