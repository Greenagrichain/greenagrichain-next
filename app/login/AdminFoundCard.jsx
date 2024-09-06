import React from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export default function AdminFoundCard({ authContext }) {
  return (
    <Card className="max-w-[400px] mt-20 mx-auto">
      <CardHeader className="text-center">
        <CardTitle>
          💪 Power User Detected 💪
          <br />
          <span className="text-muted-foreground text-xs font-normal">
            {authContext.authData.user.email}
          </span>
        </CardTitle>
        <CardDescription>
          Where do you want to go, {authContext.authData.user.firstname}.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-wrap justify-center gap-4">
        <Button className="group" asChild>
          <Link href="/admin/dashboard">
            Admin Dashboard
            <IconArrowRight className="group-hover:ml-3 ml-2 transition-all" />
          </Link>
        </Button>
        <Button className="group" variant="outline" asChild>
          <Link href="/dashboard">
            User Dashboard
            <IconArrowRight className="group-hover:ml-3 ml-2 transition-all" />
          </Link>
        </Button>
        <Button
          className="group"
          variant="outline"
          onClick={() => authContext.dispatch({ type: "LOGOUT" })}
          asChild
        >
          <Link href="/login">
            <IconArrowLeft className="group-hover:mr-3 mr-2 transition-all" />
            Use Another Account
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
