import React from "react";
import { redirect } from "next/navigation";

export default function Signup() {
  redirect("/register", "replace");
  return <div>Redirecting to Signup page... Refresh if it takes too long</div>;
}
