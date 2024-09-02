"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableCaption } from "@/components/ui/table";
import React from "react";

export default function AdminDashboard() {
  return (
    <div className="px-4 space-y-4">
      <Card className="w-fit mx-auto relative ">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-primary">
            Welcome Back Power User <br /> <span className="text-5xl">💪</span>
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="" onClick={() => '() => console.log("Clcble")'}>
        <CardHeader>
          <CardTitle className="text-xl">Recent Activities</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption className="text-center">
              No Recent Acitivity Found
            </TableCaption>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
