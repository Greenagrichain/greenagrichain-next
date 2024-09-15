import React from "react";

export default function StoreExtended() {
  return (
    <>
      <header className="header ttm-header-style-classic" id="masthead">
        <div className="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
          <div className="container">
            <div className="ttm-topbar-content">
              <ul className="top-contact ttm-highlight-left text-left text-black">
                <li>
                  <i className="fa fa-clock-o" />
                  <strong>Operating Hours:</strong> Mon - Sat 9.00 - 18.00
                </li>
              </ul>
              <div className="topbar-right text-right">
                <ul className="top-contact">
                  <li>
                    <i className="fa fa-envelope-o" />
                    <a href="mailto:support@greenagrichain.org">
                      support@greenagrichain.org
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    +1 (609) 3095419
                  </li>
                </ul>
                <div className="ttm-social-links-wrapper list-inline">
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ttm-header-wrap">
          <div
            className="ttm-stickable-header-w clearfix"
            id="ttm-stickable-header-w"
          >
            <div className="site-header-menu" id="site-header-menu">
              <div className="site-header-menu-inner ttm-stickable-header">
                <div className="container">
                  <div className="site-branding">
                    <a
                      className="home-link"
                      href="/home/"
                      rel="home"
                      title="Fondex"
                    >
                      <img
                        alt="logo-img"
                        className=""
                        id="logo-img"
                        src="/images/greenagrichain-logo.png"
                      />
                    </a>
                  </div>
                  <div className="site-navigation" id="site-navigation">
                    <div className="header-btn">
                      <a
                        className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-black"
                        href="/register/"
                      >
                        GET STARTED NOW!
                      </a>
                    </div>
                    <div className="ttm-rt-contact">
                      <div className="ttm-header-icons">
                        <span className="ttm-header-icon ttm-header-cart-link"></span>
                        <div className="ttm-header-icon ttm-header-search-link">
                          <div className="ttm-search-overlay" />
                        </div>
                      </div>
                    </div>
                    <div className="ttm-menu-toggle">
                      <input id="menu-toggle-form" type="checkbox" />
                      <label
                        className="ttm-menu-toggle-block"
                        htmlFor="menu-toggle-form"
                      >
                        <span className="toggle-block toggle-blocks-1" />
                        <span className="toggle-block toggle-blocks-2" />
                        <span className="toggle-block toggle-blocks-3" />
                      </label>
                    </div>
                    <nav className="menu" id="menu">
                      <ul className="dropdown">
                        <li className="active">
                          <a href="/home/">Home</a>
                        </li>
                        <li className="">
                          <a href="/about/">Who we are</a>
                        </li>
                        <li className="">
                          <a href="/services/">Offers</a>
                        </li>
                        <li className="">
                          <a href="/loan/">Finance</a>
                        </li>
                        <li className="">
                          <a href="/investments/">Pricing</a>
                        </li>
                        <li className="">
                          <a href="/store/">Products</a>
                        </li>
                        <li className="">
                          <a href="/contact/">Get in touch</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="ttm-page-title-row shop relative">
        <img
          alt="background image"
          className="bg-img absolute inset-0 object-cover w-full h-full"
          src="/images/slides/desert-field-overlay.jpg"
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-box ttm-textcolor-white">
                <div className="page-title-heading title-half-width">
                  <h1 className="title">
                    Choose Nature <br />
                    Empower the Earth.
                  </h1>
                </div>
              </div>
              <p
                style={{
                  width: "50%",
                }}
              >
                Unleash Clean Energy, Empower Your Home, and Embrace a
                Sustainable Future with Our Cutting-Edge Solar Solution
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="site-main">
        <section className="ttm-row about-top-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-12">
                <div className="position-relative">
                  <div className="ttm_single_image-wrapper w100">
                    <img
                      alt="single-img-one"
                      className="img-fluid"
                      src="/images/single-img-one.jpg"
                      title="single-img-one"
                    />
                  </div>
                  <div className="about-overlay-shape spacing-5">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="about-content ttm-bgcolor-skincolor">
                          <div className="featured-icon-box style6 left-icon icon-align-top">
                            <div className="featured-icon">
                              <div className="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-lg">
                                <i className="fa fa-whatsapp" />
                              </div>
                            </div>
                            <div className="featured-content">
                              <div className="featured-desc">
                                <p>Contact Us:</p>
                              </div>
                              <div className="featured-title">
                                <h5>+1 (609) 3095419</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-sm-12">
                <div className="pl-70 res-991-pl-0 res-991-mt-30">
                  <div className="section-title pr-55 res-991-pr-0 clearfix">
                    <div className="title-header">
                      <h5>greenagrichain</h5>
                      <h2 className="title">
                        High-Grade Solar Energy Solutions
                      </h2>
                    </div>
                    <div className="title-desc">
                      Both the public and private sectors are supporting green
                      initiatives, and this increase in this path is altering
                      the nature of the global economy. The commitment to
                      decarbonization is no longer just a lofty goal; it is
                      backed by substantial resources that will pour trillions
                      of dollars into eco-friendly projects, accelerating our
                      change even further.
                    </div>
                  </div>
                  <div className="row no-gutters mt-40">
                    <div className="col-sm-6">
                      <div className="featured-icon-box left-icon icon-align-top">
                        <div className="featured-icon">
                          <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                            <i className="ti ti-shield" />
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h5 className="mb-5">Stimulating Sustainability</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="featured-icon-box left-icon icon-align-top">
                        <div className="featured-icon">
                          <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                            <i className="ti ti-archive" />
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h5 className="mb-5">
                              Investing in sustainability
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row no-gutters">
                    <div className="col-sm-6">
                      <div className="featured-icon-box left-icon icon-align-top">
                        <div className="featured-icon">
                          <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                            <i className="ti ti-bar-chart" />
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h5 className="mb-5">Heightened Strategy</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="featured-icon-box left-icon icon-align-top">
                        <div className="featured-icon">
                          <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                            <i className="ti ti-briefcase" />
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h5 className="mb-5">Getting Around Complex</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ttm-row services2-section ttm-bgcolor-grey clearfix bg-gray-200">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-2 col-sm-2" />
              <div className="col-lg-6 col-md-8 col-sm-8">
                <div className="section-title text-center with-desc clearfix">
                  <div className="title-header">
                    <h5>OUR STORE</h5>
                    <h2 className="title">What We are Selling</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="card group md:col-span-2 md:row-span-2 bg-base-100 shadow-xl">
                <figure>
                  <img
                    alt="Tractors"
                    className=""
                    src="/images/shop/tractors.jpg"
                  />
                </figure>
                <div className="card-body items-center group-hover:bg-[var(--primary-medium)] group-hover:text-white flex flex-col items-start justify-center">
                  <div className="flex gap-2 items-start mb-2">
                    <i className="ti ti-truck text-lg text-[var(--primary-light)] group-hover:text-white" />
                    <h2 className="card-title text-2xl group-hover:text-white">
                      Machineries
                    </h2>
                  </div>
                  <p className="indent-0.5 mb-1">$600,000.00</p>
                  <div className="card-actions">
                    <button className="ttm-btn ttm-btn-size-sm ttm-btn-color-darkgrey btn-inline group-hover:!text-white">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
              <div className="card group bg-base-100 shadow-xl">
                <figure>
                  <img
                    alt="Tractors"
                    className=""
                    src="/images/shop/supplements.jpg"
                  />
                </figure>
                <div className="card-body items-center group-hover:bg-[var(--primary-medium)] group-hover:text-white">
                  <div className="flex gap-2 items-start">
                    <i className="ti ti-package text-lg text-[var(--primary-light)] group-hover:text-white" />
                    <h2 className="card-title text-2xl group-hover:text-white">
                      Supplements
                    </h2>
                  </div>
                  <p className="indent-0.5">$70.00 - $120.00</p>
                  <div className="card-actions">
                    <button className="ttm-btn ttm-btn-size-sm ttm-btn-color-darkgrey btn-inline group-hover:!text-white">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
              <div className="card group bg-base-100 shadow-xl">
                <figure>
                  <img
                    alt="Tractors"
                    className=""
                    src="/images/shop/pest-and-weed-control.jpg"
                  />
                </figure>
                <div className="card-body items-center group-hover:bg-[var(--primary-medium)] group-hover:text-white">
                  <div className="flex gap-2 items-start">
                    <i className="ti ti-spray text-lg text-[var(--primary-light)] group-hover:text-white" />
                    <h2 className="card-title text-2xl group-hover:text-white">
                      Pest and weed control
                    </h2>
                  </div>
                  <p className="indent-0.5">$340.00 - $500.00</p>
                  <div className="card-actions">
                    <button className="ttm-btn ttm-btn-size-sm ttm-btn-color-darkgrey btn-inline group-hover:!text-white">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-container flex my-8 flex-wrap justify-center gap-3 gap-y-8 p-2">
              <div className="product-sample hidden group flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md relative">
                <a className="relative flex h-60 overflow-hidden" href="#">
                  <img
                    alt="product image"
                    className="product-image absolute top-0 right-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
                  />
                  <div className="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
                    <div className="h-3 w-3 rounded-full border-2 border-white bg-white" />
                    <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent" />
                    <div className="h-3 w-3 rounded-full border-2 border-white bg-transparent" />
                  </div>
                  <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
                    <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </a>
                <div className="mt-4 px-4 grow pb-3 flex flex-col justify-center">
                  <a href="#">
                    <h5 className="product-title text-xl tracking-tight text-slate-900">
                      Lululemon Comfort Tee - White
                    </h5>
                  </a>
                  <div className="mt-2 mb-5">
                    <p>
                      <span className="product-price text-3xl font-bold text-slate-900">
                        $79
                      </span>
                      <span className="product-discount text-sm text-slate-900 line-through">
                        $99
                      </span>
                      <span className="product-discount-percent text-red-400">
                        -20% off
                      </span>
                    </p>
                  </div>
                  <p className="product-description text-justify text-xs mb-2" />
                  <button className="flex items-center justify-center bg-[var(--primary-light)] px-2 py-1 mt-auto text-sm text-white transition hover:bg-[var(--primary-dark)]">
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    Add to cart
                  </button>
                </div>
                <div className="product-tag-container absolute top-3 right-3 text-xs text-white flex flex-col">
                  <span className="product-tag-sample hidden bg-red-700 rounded-lg px-2 uppercase py-0.5">
                    hot
                  </span>
                </div>
              </div>
            </div>
            <div className="container flex justify-center">
              <a
                className="group bg-[var(--primary-light)] text-white px-4 py-2 inline-flex gap-2 items-center mx-auto"
                href="/products"
              >
                See more products
                <svg
                  className="group-hover:ml-2 transition-all duration-300"
                  height="1em"
                  viewBox="0 0 16 16"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer widget-footer clearfix">
        <div className="first-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="first-footer-inner">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "                    .flex {                      display: flex;                    }                    .flex-wrap {                      flex-wrap: wrap;                    }                    .flex-col {                      flex-direction: column;                    }                    .items-center {                      align-items: center;                    }                    .justify-between {                      justify-content: space-between;                    }                  ",
                    }}
                  />
                  <div className="footer-logo flex justify-between align-center flex-wrap">
                    <img
                      alt=""
                      className="img-center"
                      height="300"
                      id="footer-logo-img"
                      src="/images/greenagrichain-logo.png"
                      width="300"
                    />
                    <div className="ttm_single_image-wrapper p-12 with-border">
                      <img
                        alt="telegram_bot"
                        className="img-fluid"
                        height="100"
                        src="/images/greenagrichain_telegram.jpg"
                        title="telegram"
                        width="200"
                      />
                      <div className="col-md-4 widget-area">
                        <a href="https://t.me/+1 (609) 3095419" target="_blank">
                          Telegram
                          <p>+1 (609) 3095419</p>
                          <h5>Message us on Telegram</h5>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row no-gutters footer-box">
                    <div className="col-md-4 widget-area">
                      <div className="featured-box text-center">
                        <a
                          href="https://wa.me/+1 (609) 3095419"
                          target="_blank"
                        >
                          Whatsapp
                        </a>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h5>Our Address</h5>
                          </div>
                          <div className="featured-desc">
                            <p>201 Fox Point Cir, Weatherford,TX 76087 USA</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 widget-area">
                      <div className="featured-box text-center">
                        <div className="featured-content">
                          <div className="featured-title">
                            <h5>Talk To Expert</h5>
                          </div>
                          <div className="featured-desc">
                            <a
                              href="https://wa.me/+1 (609) 3095419"
                              target="_blank"
                            >
                              Message
                              <p>+1 (609) 3095419</p>
                              <h5>Message us on Whatsapp</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 widget-area">
                      <div className="featured-box text-center">
                        <div className="featured-content">
                          <div className="featured-title">
                            <h5>Email Us</h5>
                          </div>
                          <div className="featured-desc">
                            <p>support@greenagrichain.org</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row no-gutters">
                    <div className="col-md-3 col-sm-2" />
                    <div className="col-md-6 col-sm-8">
                      <div className="">
                        <form
                          action="https://greenagrichain.org/subscribe-to-newsletter"
                          className="newsletter-form"
                          data-mailchimp="true"
                          id="subscribe-form"
                          method="post"
                        >
                          <input
                            defaultValue="1Tb717FB6UkGz3OicvssuYjz6AIbu03LyoeeChFP"
                            name="_token"
                            type="hidden"
                          />
                          <div
                            className="mailchimp-inputbox clearfix"
                            id="subscribe-content"
                          >
                            <i className="fa fa-envelope-o" />
                            <input
                              name="email"
                              placeholder="Your Email Address.."
                              required
                              type="email"
                            />
                            <input type="submit" value="SUBMIT" />
                          </div>
                          <div id="subscribe-msg" />
                        </form>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-footer ttm-textcolor-white bg-[#264f41]">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                <div className="widget widget_text clearfix">
                  <h3 className="widget-title">About Greenagrichain</h3>
                  <div className="textwidget widget-text">
                    Empowering a Sustainable Future: Innovative Agricultural
                    Solutions for a Greener World
                    <br />
                    <br />
                    <div className="social-icons circle social-hover">
                      <ul className="list-inline">
                        <li className="social-facebook">
                          <a
                            className="tooltip-top"
                            data-tooltip="Facebook"
                            href="#"
                            target="_blank"
                          >
                            <i aria-hidden="true" className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="social-twitter">
                          <a
                            className="tooltip-top"
                            data-tooltip="Telegram"
                            href="https://t.me/greenagrichain"
                            target="_blank"
                          >
                            <i aria-hidden="true" className="fa fa-telegram" />
                          </a>
                        </li>
                        <li className="social-flickr">
                          <a
                            className="tooltip-top"
                            data-tooltip="Instagram"
                            href="https://www.instagram.com/greenagrichain?igsh=bWtxZm1oeDJ6Mjh3"
                            target="_blank"
                          >
                            <i aria-hidden="true" className="fa fa-instagram" />
                          </a>
                        </li>
                        <li className="social-linkedin">
                          <a
                            className="tooltip-top"
                            data-tooltip="LinkedIn"
                            href="https://www.linkedin.com/company/greenagrichain-org/"
                            target="_blank"
                          >
                            <i aria-hidden="true" className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <br />
                    <div className="mb-20">
                      <a
                        className="ttm-btn ttm-btn-size-xs ttm-btn-shape-square ttm-btn-style-fill ttm-btn-bgcolor-skincolor ttm-btn-color-white"
                        href="#"
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                <div className="widget widget_nav_menu clearfix">
                  <h3 className="widget-title">Quick Links</h3>
                  <ul id="menu-footer-services">
                    <li>
                      <a href="/about/">Who we are</a>
                    </li>
                    <li>
                      <a href="/services/">Offers</a>
                    </li>
                    <li>
                      <a href="/faqs/">FAQs</a>
                    </li>
                    <li>
                      <a href="/store/">Products</a>
                    </li>
                    <li>
                      <a href="/contact/">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 widget-area">
                <div className="widget flicker_widget clearfix">
                  <h3 className="widget-title">Our Branches</h3>
                  <div className="textwidget widget-text">
                    <br />
                    <br />
                    <ul className="ttm-our-location-list" id="locationAddr">
                      <li id="location1">
                        <p>1401 21ST ST</p>
                        <p>STE R</p>
                        <p>Sacramento, California 95811</p>
                      </li>
                      <li id="location2">
                        <p>201 Fox Point Cir,</p>
                        <p>Weatherford,TX 76087 USA</p>
                      </li>
                      <br />
                      <li id="branch2">
                        <p>MD ABU RAYAT</p>
                        <p>71-75 Shelton Street</p>
                        <p>Convent Garden</p>
                        <p>London WC2H 9JQ</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer-text ttm-textcolor-white bg-[#264f41]">
          <div className="container">
            <div className="row copyright">
              <div className="col-md-12">
                <div className="">
                  <span>
                    Copyright © 2019 - 2024
                    <a href="#">Greenagrichain</a>. All rights reserved.
                  </span>
                </div>
              </div>
              <div className="col-md-12">
                <ul className="footer-nav-menu" id="menu-footer-menu">
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Offers</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
