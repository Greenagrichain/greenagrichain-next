import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Msg from "@/components/Msg";

export default function SignupForm({
  formData,
  setFormData,
  handleFormSubmit,
  error,
  success,
  waiting,
}) {
  function handleFormData(e) {
    setFormData((pfd) => ({ ...pfd, [e.target.name]: e.target.value }));
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <img
        className="absolute top-0 left-0 w-screen h-screen -z-10 "
        src="/login-bg.jpg"
        alt="Background Image"
      />
      <div className="bg-overlay absolute top-0 left-0 w-screen -z-10 h-screen bg-neutral-900/60"></div>
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle className="text-xl">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <img
                className=""
                src="/images/greenagrichain-logo.png"
                alt="Logo"
                width={72}
                height={72}
              />
            </div>
          </CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFormSubmit} action="post">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    placeholder="Max"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormData}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    placeholder="Robinson"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormData}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleFormData}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Phone</Label>
                <Input
                  id="phone"
                  type="phone"
                  placeholder="+1234567899"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormData}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleFormData}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm_password">Confirm Password</Label>
                <Input
                  id="confirm_password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleFormData}
                />
              </div>
              <Msg
                msg={success ? success : error}
                type={success ? "success" : "error"}
              />
              {waiting ? (
                <Button disabled>
                  <span className="p-1 m-1 rounded-full border-4 border-s-transparent animate-spin "></span>
                  Creating your account...
                </Button>
              ) : (
                <Button type="submit" className="w-full">
                  Create an account
                </Button>
              )}
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
