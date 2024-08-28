import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IconLayoutSidebar, IconUser } from "@tabler/icons-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { createNavlinks } from "./Sidenav";
import navlinks from "./navlinks";
import useAuthContext from "@/lib/hooks/useAuthContext";

export default function DashboardHeader() {
  const [openedLinks, setOpenedLinks] = useState({});
  const currentUrl = usePathname();
  const {
    authData: { user },
  } = useAuthContext();

  console.log(user);
  return (
    <div className="sticky top-0 z-30 flex mb-4 h-14 items-center gap-4 border-b bg-background px-4 py-2 sm:static sm:h-auto sm:bg-transparent sm:px-6">
      <Sheet className="mobile-nav">
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <IconLayoutSidebar className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <ul className="grid gap-6 text-lg font-medium">
            {createNavlinks(navlinks, openedLinks, setOpenedLinks, currentUrl)}
          </ul>
        </SheetContent>
      </Sheet>

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="ml-auto">
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            {false ? (
              <img
                src="/placeholder-user.jpg"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
              />
            ) : (
              <div className="avatar w-9 h-9 rounded-full bg-white flex justify-center items-center outline-none">
                <IconUser />
              </div>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            My Account
            <br />
            <span className="text-muted-foreground text-xs font-normal">
              {user.firstname} {user.lastname}
              <br />
              {user.email}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/logout">Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
