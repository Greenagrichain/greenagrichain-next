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

export default function UserFoundCard({ authContext }) {
  return (
    <Card className="w-min mt-20 mx-auto">
      <CardHeader>
        <CardTitle>
          User Found
          <br />
          <span className="text-muted-foreground text-xs font-normal">
            {authContext.authData.user.email}
          </span>
        </CardTitle>
        <CardDescription>
          Log in as {authContext.authData.user.firstname}.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-4">
        <Button className="group" asChild>
          <Link href="/dashboard">
            Continue
            <IconArrowRight className="group-hover:ml-3 ml-2 transition-all" />
          </Link>
        </Button>
        <Button
          variant="outline"
          onClick={() => authContext.dispatch({ type: "LOGOUT" })}
        >
          Use Another Account
        </Button>
      </CardFooter>
    </Card>
  );
}
