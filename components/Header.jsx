import React from "react";
import logo from "@/greenagrichain-logo.png";

import {
  IconClock,
  IconMail,
  IconPhone,
  IconBrandFacebookFilled,
  IconBrandTwitterFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";

export default function Header() {
  const navLinks = [
    { name: "Home", href: "/index.html" },
    { name: "Who we are", href: "/about.html" },
    { name: "Offers", href: "/services.html" },
    { name: "Finance", href: "/loan.html" },
    { name: "Pricing", href: "/investments.html" },
    { name: "Products", href: "/store.html" },
    { name: "Get in touch", href: "/contact.html" },
  ];
  return (
    <header className="">
      <HeaderRibbon />
      <nav>
        <img src={logo} alt="Greenagrichain Logo" className="logo" />

        <ul className="nav-links">
          {navLinks.map((item) => (
            <li>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>

        <a href="/login">
          <button className="btn">Get Started Now!</button>
        </a>
      </nav>
      {/* <div className="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
        <div className="container">
        </div>
      </div>
      <div className="ttm-header-wrap">
        <div
          id="ttm-stickable-header-w"
          className="ttm-stickable-header-w clearfix"
        >
          <div id="site-header-menu" className="site-header-menu">
            <div className="site-header-menu-inner ttm-stickable-header">
              <div className="container">
                <div className="site-branding gac-logo-container">
                  <a
                    className="home-link"
                    href="index.html"
                    title="Fondex"
                    rel="home"
                  >
                    <img
                      id="logo-img"
                      className=""
                      src={logo}
                      alt="Greenagrichain Logo"
                    />
                  </a>
                </div>
                <div id="site-navigation" className="site-navigation">
                  <div className="header-btn">
                    <a
                      className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-black"
                      href="register.html"
                    >
                      GET STARTED NOW!
                    </a>
                  </div>
                  <div className="ttm-rt-contact">
                    <div className="ttm-header-icons">
                      <span className="ttm-header-icon ttm-header-cart-link"></span>
                      <div className="ttm-header-icon ttm-header-search-link">
                        <div className="ttm-search-overlay"></div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-menu-toggle">
                    <input type="checkbox" id="menu-toggle-form" />
                    <label
                      for="menu-toggle-form"
                      className="ttm-menu-toggle-block"
                    >
                      <span className="toggle-block toggle-blocks-1"></span>
                      <span className="toggle-block toggle-blocks-2"></span>
                      <span className="toggle-block toggle-blocks-3"></span>
                    </label>
                  </div>
                  <nav id="menu" className="menu">
                    <ul className="dropdown">
                      <li className="active">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="">
                        <a href="about.html">Who we are</a>
                      </li>
                      <li className="">
                        <a href="services.html">Offers</a>
                      </li>
                      <li className="">
                        <a href="loan.html">Finance</a>
                      </li>
                      <li className="">
                        <a href="investments.html">Pricing</a>
                      </li>

                      <li className="">
                        <a href="store.html">Products</a>
                      </li>
                      <li className="">
                        <a href="contact.html">Get in touch</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
}

function HeaderRibbon() {
  return (
    <div className="header-ribbon hidden lg:flex max-w-[100vw] text-white *:p-4 *:px-6 text-sm">
      <div className="bg-primary-light basis-1/3 flex justify-end">
        <span className="flex gap-2 items-center ">
          <IconClock />
          <strong>Operating Hours:</strong> Mon - Sat 9.00 - 18.00
        </span>
      </div>

      <div className="basis-2/3 bg-primary-dark">
        <ul className="social-group flex divide-x justify-end *:px-6">
          <li className="social flex items-center gap-1">
            <IconMail />
            <a href="mailto:support@greenagrichain.org">
              support@greenagrichain.org
            </a>
          </li>

          <li className="social flex items-center gap-1">
            <IconPhone />
            +4154879201
          </li>
          <li className="social flex gap-2">
            <a href="#" rel="noreferrer">
              <IconBrandFacebookFilled />
            </a>
            <a href="#" rel="noreferrer">
              <IconBrandTwitterFilled />
            </a>
            <a href="#" rel="noreferrer">
              <IconBrandInstagramFilled />
            </a>
            <a href="#" rel="noreferrer">
              <IconBrandLinkedinFilled />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
