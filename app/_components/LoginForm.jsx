import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Msg from "@/components/Msg";

export default function LoginForm({
  handleFormSubmit,
  formData,
  setFormData,
  error,
  success,
  waiting,
}) {
  function handleFormData(e) {
    setFormData((pfd) => ({
      [e.target.name]: e.target.value,
      ...pfd,
    }));
  }
  return (
    <div className="w-full lg:grid lg:min-h-[500px] lg:grid-cols-2 xl:min-h-[700px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6 p-4 ring-1 ring-primary shadow-md shadow-primary rounded-lg lg:ring-0 lg:shadow-none lg:bg-neutral-50">
          <div className="grid gap-2 text-center">
            <div className="text-center">
              <img
                className="inline"
                src="/greenagrichain-logo.png"
                alt="Logo"
                width={72}
                height={72}
              />
              <h1 className="text-3xl font-bold">Login</h1>
            </div>
            <p className="text-balance text-sm text-muted-foreground">
              Enter your credentials below to login to your account
            </p>
          </div>
          <form method="post" onSubmit={handleFormSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormData}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleFormData}
                  required
                />
              </div>
              <Msg
                msg={success ? success : error}
                type={success ? "success" : "error"}
              />
              {waiting ? (
                <Button disabled>
                  <span className="p-1 m-1 rounded-full border-4 border-s-transparent animate-spin "></span>
                  Logging in...
                </Button>
              ) : (
                <Button type="submit" className="w-full">
                  Login
                </Button>
              )}
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="/login-bg.jpg"
          alt="Greenagrichain Site"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
