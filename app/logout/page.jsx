"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    localStorage.removeItem("_greenagrichain");
    redirect("/login");
  });
  return <div>Logging out... Refresh page if it takes too long</div>;
}
