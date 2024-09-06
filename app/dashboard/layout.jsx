"use client";
import { useEffect } from "react";
import Sidenav from "@/components/DSidenav";
import DashboardHeader from "@/components/DHeader";

import useAuthContext from "@/lib/hooks/useAuthContext";
import userRoutes from "./userRoutes";
import DashboardFooter from "@/components/DFooter";
import { redirect } from "next/navigation";
import useSWR from "swr";
import { toast } from "sonner";

export default function DashboardLayout({ children }) {
  const { authData, dispatch: authDispatch } = useAuthContext();
  if (!authData) redirect("/login");

  const {
    data: newUserData,
    isLoading,
    error,
  } = useSWR(`/api/users/${authData.user.id}`);

  if (error) {
    toast.error("Error fetching updated information", {
      description: "refresh the page to try again.",
      id: "userError",
    });
  }

  useEffect(() => {
    if (newUserData) {
      localStorage.setItem(
        "_greenagrichain",
        JSON.stringify({ ...authData, user: newUserData })
      );
      authDispatch({ type: "UPDATE_USER", payload: newUserData });
      console.log("woooow");
    }
  }, [newUserData]);

  return (
    <div className="dashboard relative flex min-h-screen w-full bg-muted/40">
      <Sidenav className="max-w-[250px] min-w-[250px]" navlinks={userRoutes} />
      <main className="grow flex flex-col relative bg-neutral-50">
        <DashboardHeader />
        {children}
        <DashboardFooter />
      </main>
    </div>
  );
}
