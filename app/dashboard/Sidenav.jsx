"use client";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import { usePathname } from "next/navigation";

import navlinks from "./navlinks";
import { cn } from "@/lib/utils";

export default function Sidenav({ className = "" }) {
  const [openedLinks, setOpenedLinks] = useState({});
  const currentUrl = usePathname();

  return (
    <aside
      className={cn(
        "z-10 hidden sticky top-0 self-start h-screen basis-[400px] flex-col border-r bg-background sm:flex",
        className
      )}
    >
      <img
        src="/greenagrichain-logo.png"
        alt="Greenagrichain Logo"
        width={96}
        height={96}
        className="self-center"
      />
      <Separator className="w-[90%] self-center" />

      <ul className="nav p-1 space-y-1">
        {createNavlinks(navlinks, openedLinks, setOpenedLinks, currentUrl)}
      </ul>
    </aside>
  );
}

export function createNavlinks(links, openedLinks, setOpenedLinks, currentUrl) {
  const navlink = (l) => (
    <li className="list-none" key={l.name + l.href}>
      <Link
        href={l.exact || !l.children ? l.href : "#"}
        className={cn(
          buttonVariants({ variant: "outline" }),
          " w-full justify-start items-end gap-1 border-none shadow-none cursor-pointer",
          { "bg-primary/10": currentUrl?.replace(/\/$/, "") === l.href }
        )}
      >
        {l.icon}
        {l.name}
      </Link>
    </li>
  );

  return links.map((link) =>
    !link.children ? (
      navlink(link)
    ) : (
      <Collapsible open={openedLinks[link.name]} key={link.name + link.href}>
        <CollapsibleTrigger
          asChild
          onClick={() =>
            setOpenedLinks((pol) => ({
              ...pol,
              [link.name]: !pol[link.name],
            }))
          }
        >
          {navlink(link)}
        </CollapsibleTrigger>
        <CollapsibleContent className="ml-6 border-s-2 pl-1">
          {createNavlinks(link.children)}
        </CollapsibleContent>
      </Collapsible>
    )
  );
}
