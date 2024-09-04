"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableCaption } from "@/components/ui/table";

import Link from "next/link";
import React from "react";

export default function AdminDashboard() {
  return (
    <div className="px-4 space-y-4">
      <Card className="w-fit mx-auto relative ">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-primary">
            <span className="text-5xl">💪</span>
            <br />
            Welcome Back Power User
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p>
            Patience as your power platform cooks gradually. <br />
            {"<It (may) take[s] (a lot of) time>"}
          </p>
          <Separator className="my-2" />
          <p>
            You will see minimal features. Only the features you need to perform
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-4 justify-center p-4">
        <Button asChild>
          <Link href="/admin/users">View Users</Link>
        </Button>
        <Button asChild>
          <Link href="/admin/deposits">View Deposits</Link>
        </Button>
      </div>
      <Card className="" onClick={() => '() => console.log("Clcble")'}>
        <CardHeader>
          <CardTitle className="text-xl">Recent Activities</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption className="text-center">
              You wont see anything here
            </TableCaption>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
