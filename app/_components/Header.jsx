import React, { useState } from "react";

import {
  IconClock,
  IconMail,
  IconPhone,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const navLinks = [
  { name: "Home", href: "/index.html" },
  { name: "Who we are", href: "/about.html" },
  { name: "Offers", href: "/services.html" },
  { name: "Finance", href: "/loan.html" },
  { name: "Pricing", href: "/investments.html" },
  { name: "Products", href: "/store.html" },
  { name: "Get in touch", href: "/contact.html" },
];

export default function Header() {
  const [navActive, setNavActive] = useState(false);

  return (
    <header className="">
      <HeaderRibbon />
      <nav className="flex container relative justify-between lg:justify-around items-center ">
        <div className="logo-container">
          <img
            src="/greenagrichain-logo.png"
            alt="Greenagrichain Logo"
            className="logo p-2"
            width={128}
            height={128}
          />
        </div>

        <ul className="nav-links lg:flex gap-3 text-sm hidden">
          {navLinks.map((item) => (
            <li>
              <a
                href={item.href}
                class="transition p-2 uppercase hover:text-primary-light"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <Button className="text-nowrap" asChild>
          <a href="/login" className="hidden lg:inline-block">
            Get Started Now!
          </a>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger className="lg:hidden">
            {navActive ? <IconX /> : <IconMenu2 />}
          </DropdownMenuTrigger>

          <DropdownMenuContent asChild>
            <ul className="text-center w-screen lg:hidden gap-3 text-sm">
              {navLinks.map((item) => (
                <DropdownMenuItem asChild>
                  <li className="hover:bg-primary/20 outline-none">
                    <a
                      href={item.href}
                      className="transition block w-full p-2 uppercase"
                    >
                      {item.name}
                    </a>
                  </li>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <li className="hover:bg-transparent">
                  <Button className="text-nowrap m-auto">
                    <a href="/login" className="">
                      Get Started Now!
                    </a>
                  </Button>
                </li>
              </DropdownMenuItem>
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}

const HeaderRibbon = () => {
  return (
    <div className="header-ribbon hidden lg:flex max-w-[100vw] text-white *:p-3 *:grow font-light *:px-6 text-[0.8rem]">
      <div className="bg-secondary basis-[30%] flex justify-end">
        <span className="flex gap-2 items-center text-secondary-foreground">
          <IconClock />
          <strong>Operating Hoursstrong</strong> Mon - Sat 9.00 - 18.00
        </span>
      </div>

      <div className="basis-[70&] bg-primary">
        <ul className="social-group flex divide-x justify-end items-center *:px-6">
          <li className="social flex items-center gap-1">
            <IconMail className="hover:text-primary-light" />
            <a href="mailto:support@greenagrichain.org">
              support@greenagrichain.org
            </a>
          </li>

          <li className="social flex items-center gap-1">
            <IconPhone className="hover:text-primary-light" />
            +4154879201
          </li>
          <li className="social flex gap-2">
            {[
              IconBrandFacebook,
              IconBrandInstagram,
              IconBrandLinkedin,
              IconBrandTwitter,
            ].map((SocialIcon) => (
              <a href="#" rel="noreferrer">
                <SocialIcon size={18} className="hover:text-primary-light" />
              </a>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};
