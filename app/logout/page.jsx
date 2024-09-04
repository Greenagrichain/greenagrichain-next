"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import useAuthContext from "@/lib/hooks/useAuthContext";
import useLogout from "@/lib/hooks/useLogout";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Logout() {
  const logout = useLogout();
  const [loggedOut, setLoggedOut] = useState(true);
  const { authData } = useAuthContext();
  const router = useRouter();

  function handleLogout() {
    logout();
    // router.push("/login");
  }

  useEffect(() => {
    if (authData) setLoggedOut(false);
  }, [authData]);

  return (
    <Card className="w-min mt-20 mx-auto">
      <CardHeader>
        <CardTitle>Logout</CardTitle>
        <CardDescription>
          {loggedOut
            ? "You are currently logged out"
            : "You will be logged out of your account"}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-4">
        {loggedOut ? (
          <>
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/signup">Signup</Link>
            </Button>
          </>
        ) : (
          <>
            <Button onClick={handleLogout} asChild>
              <a href="/login">Logout</a>
            </Button>
            <Button variant="outline" onClick={() => router.back()}>
              Take me back
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
