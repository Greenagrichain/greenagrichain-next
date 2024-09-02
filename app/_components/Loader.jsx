import { cn } from "@/lib/utils";
import React from "react";

export default function Loader({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        // " icon icon-tabler icons-tabler-outline icon-tabler-loader-3 ",
        className
      )}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        className="animate-spin origin-center"
        d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9"
      />
      <path
        className="animate-spin direction-reverse origin-center"
        d="M17 12a5 5 0 1 0 -5 5"
      />
    </svg>
  );
}

export function FullLoader({ className, loaderClassName, variant = "light" }) {
  return (
    <div
      className={cn(
        "absolute inset-0  z-50 flex justify-center items-center",
        variant === "light" ? "bg-white/90" : "bg-slate-950/90 "
      )}
    >
      <Loader
        className={cn(
          "w-20 h-20",
          variant === "light" ? "text-primary" : "text-primary-foreground",
          loaderClassName
        )}
        // className="text-primary"
      />
    </div>
  );
}
