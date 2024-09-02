"use client";
import Sidenav from "../_components/DSidenav";
import DashboardHeader from "../_components/DHeader";

import useAuthContext from "@/lib/hooks/useAuthContext";
import userRoutes from "./userRoutes";
import DashboardFooter from "../_components/DFooter";
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }) {
  const { authData } = useAuthContext();

  if (!authData) redirect("/login");

  return (
    <div className="dashboard relative flex min-h-screen w-full bg-muted/40">
      <Sidenav className="max-w-[250px] min-w-[250px]" navlinks={userRoutes} />
      <main className="grow flex flex-col relative">
        <DashboardHeader />
        {children}
        <DashboardFooter />
      </main>
    </div>
  );
}
