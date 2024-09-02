"use client";
import React, { useState } from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LoginForm from "./LoginForm";

import { useRouter } from "next/navigation";
import Link from "next/link";

import useAuthContext from "@/lib/hooks/useAuthContext";
import { IconArrowRight } from "@tabler/icons-react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const authContext = useAuthContext();

  async function handleFormSubmit(e) {
    e.preventDefault();
    setWaiting(true);

    try {
      const res = await fetch(
        `${"https://greenagrichain-backend.onrender.com"}/api/auth/login`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("_greenagrichain", JSON.stringify(data));
        authContext.dispatch({ type: "LOGIN", payload: data });
        defineSuccess(data.message + ". Redirecting to dashboard...");
        router.push("/dashboard");
        return;
      } else {
        defineError(data.message);
      }
    } catch (error) {
      defineError(error);
    }

    setWaiting(false);
  }

  function defineError(msg) {
    setError(msg);
    setTimeout(() => setError(""), 3000);
  }
  function defineSuccess(msg) {
    setSuccess(msg);
    setTimeout(() => setSuccess(""), 3000);
  }

  if (authContext.authData?.user && !waiting) {
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

  return (
    <div>
      <LoginForm
        handleFormSubmit={handleFormSubmit}
        formData={formData}
        setFormData={setFormData}
        waiting={waiting}
        success={success}
        error={error}
      />
    </div>
  );
}
