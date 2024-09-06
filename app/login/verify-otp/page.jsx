"use client";
import { useState } from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Msg from "@/components/Msg";
import useAuthContext from "@/lib/hooks/useAuthContext";
import AdminFoundCard from "../AdminFoundCard";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axiosInstance";
import { toast } from "sonner";
import Loader from "@/components/Loader";

export default function VerifyOTP() {
  const searchParams = useSearchParams();
  const [otpData, setOtpData] = useState({
    email: searchParams.get("email"),
    otp: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const authContext = useAuthContext();
  const router = useRouter();

  async function verifyOTP() {
    setIsLoading(true);

    if (!otpData.email || !otpData.otp) {
      defineError("All fields are required");
      return setIsLoading(false);
    }

    try {
      const response = await axiosInstance.post(
        "/api/auth/verify-otp",
        otpData
      );

      localStorage.setItem("_greenagrichain", JSON.stringify(response.data));
      authContext.dispatch({ type: "LOGIN", payload: response.data });
      defineSuccess(response.data.message);
      toast.success(response.data.message);

      if (authContext.authData.user.role === "ADMIN") {
        setIsAdmin(true);
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      defineError(error.response ? error.response.data.message : error.message);
    }
    setIsLoading(false);
  }

  function defineError(msg) {
    setError(msg);
    setTimeout(() => setError(""), 3000);
  }
  function defineSuccess(msg) {
    setSuccess(msg);
    setTimeout(() => setSuccess(""), 5000);
  }

  if (isAdmin) {
    return <AdminFoundCard authContext={authContext} />;
  }
  return (
    <div className="flex justify-center items-center bg-[url(/login-bg.jpg)] w-screen h-screen overflow-hidden bg-cover relative">
      <div className="overlay absolute inset-0 bg-black/50"></div>
      <Card className="w-fit z-10">
        <CardHeader>
          <CardTitle className="text-center text-xl">Verify OTP</CardTitle>
          <CardDescription>
            An OTP has been sent to your email. Enter the code below
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            value={searchParams.get("email")}
            placeholder={
              searchParams.get("email")
                ? "Email Address"
                : "Login first to verify OTP"
            }
            readOnly
            disabled
          />
          <Input
            type="number"
            name="otp"
            value={otpData.otp}
            onChange={(e) =>
              setOtpData((od) => ({ ...od, otp: e.target.value }))
            }
            placeholder="Enter OTP"
          />
          <Msg type="success" msg={success} />
          <Msg type="error" msg={error} />
        </CardContent>
        <CardFooter className="justify-between">
          <Button
            onClick={verifyOTP}
            disabled={isLoading}
            className="flex gap-2"
          >
            {isLoading && <Loader />}
            Verify
          </Button>
          <Link href="/login" className="underline">
            Login?
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
