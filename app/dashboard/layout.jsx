"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import Sidenav from "./Sidenav";

export default function DashboardLayout({ children }) {
  try {
    let data = localStorage.getItem("_greenagrichain");
    let userData = JSON.parse(data);
    console.log(userData);

    if (!userData) redirect("/login");
  } catch (error) {
    // redirect("/login");
  }
  return (
    <div className="dashboard flex min-h-screen w-full bg-muted/40">
      <Sidenav />
      {children}
    </div>
  );
}
