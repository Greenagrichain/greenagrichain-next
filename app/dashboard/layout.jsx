"use client";
import Sidenav from "./Sidenav";
import DashboardHeader from "./DashboardHeader";

import useAuthContext from "@/lib/hooks/useAuthContext";
import Link from "next/link";
import DashboardFooter from "./DashboardFooter";
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }) {
  const { authData } = useAuthContext();

  if (!authData) redirect("/login");

  return (
    <div className="dashboard relative flex min-h-screen w-full bg-muted/40">
      <Sidenav />
      <main className="grow">
        <DashboardHeader />
        {children}
        <DashboardFooter />
      </main>
    </div>
  );
}
