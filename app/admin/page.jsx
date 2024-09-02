import { redirect } from "next/navigation";
import React from "react";

export default function Admin() {
  redirect("/admin/dashboard");
  return <div>Admin</div>;
}
