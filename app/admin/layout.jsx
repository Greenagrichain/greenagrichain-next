"use client";
import Sidenav from "@/components/DSidenav";
import DHeader from "@/components/DHeader";
import DFooter from "@/components/DFooter";

import useAuthContext from "@/lib/hooks/useAuthContext";
import { redirect } from "next/navigation";
import adminRoutes from "./adminRoutes";

export default function DashboardLayout({ children }) {
  const { authData } = useAuthContext();

  if (!authData) redirect("/login");

  return (
    <div className="dashboard relative flex min-h-screen w-full bg-muted/40">
      <Sidenav className="max-w-[250px] min-w-[250px]" navlinks={adminRoutes} />
      <main className="grow flex flex-col ">
        <DHeader />
        {children}
        <DFooter />
      </main>
    </div>
  );
}
