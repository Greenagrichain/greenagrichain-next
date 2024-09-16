import React from "react";
import TokenUtilities from "./TokenUtilities";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <main>
      <div className="ttm-page-title-row relative">
        <img
          alt="background image"
          className="bg-img absolute inset-0 object-cover w-full h-full"
          src="/images/slides/people-planting-overlay.jpg"
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-box ttm-textcolor-white">
                <div className="page-title-heading">
                  <h1>Who we are</h1>
                </div>
                <div className="breadcrumb-wrapper">
                  <span>
                    <a href="/home/" title="Homepage">
                      <i className="ti ti-home" />
                      Home
                    </a>
                  </span>
                  <span className="ttm-bread-sep">|</span>
                  <span>Get to know us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-main">
        <section className="ttm-row about-top-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="position-relative pr-15 res-991-pr-0">
                  <div className="row mb-30 flex flex-wrap items-center">
                    <div className="col-sm-6">
                      <div className="ttm_single_image-wrapper ttm-991-center">
                        <img
                          alt="single-img-five"
                          className="img-fluid"
                          src="/images/single-img-five.jpg"
                          title="single-img-three"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="ttm_single_image-wrapper ttm-991-center res-575-mt-30">
                        <img
                          alt="single-img-four"
                          className="img-fluid"
                          src="/images/single-img-four.jpg"
                          title="single-img-four"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="position-relative">
                        <div className="ttm_single_image-wrapper w100">
                          <img
                            alt="single-img-three"
                            className="img-fluid"
                            src="/images/single-img-three.jpg"
                            title="agrichain in process"
                          />
                        </div>
                        <div className="ttm-fid inside ttm-fid-view-lefticon ttm-highlight-fid-style2">
                          <div className="ttm-fid-left">
                            <div className="ttm-fid-icon-wrapper">
                              <i className="ti ti-world" />
                            </div>
                          </div>
                          <div className="ttm-fid-contents text-left">
                            <h4 className="ttm-fid-inner">
                              <span
                                data-after="+"
                                data-after-style="sub"
                                data-appear-animation="animateDigits"
                                data-before=""
                                data-before-style="sup"
                                data-from="0"
                                data-interval="5"
                                data-to="45"
                              >
                                45
                              </span>
                            </h4>
                            <h3 className="ttm-fid-title">
                              Years Of Experience
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="pl-15 res-991-pl-0 res-991-mt-30">
                  <div className="section-title pr-60 res-991-pr-0 clearfix">
                    <div className="title-header">
                      <h5>ABOUT Greenagrichain</h5>
                      <h2 className="title">
                        Greenagrichain oversees the entire process of developing
                        financially viable assets.
                      </h2>
                    </div>
                    <div className="title-desc">
                      Every phase of the engagement — The board has pledged to
                      reduce environmental change and have an ESG impact,
                      leading to a better future by obtaining, improving,
                      developing, funding, tasks, and resources.
                    </div>
                  </div>
                  <div className="row no-gutters mt-40 mb-27">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      <ul className="ttm-list ttm-list-style-icon">
                        <li>
                          <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                          <span className="ttm-list-li-content">
                            Quality and Expertise
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                          <span className="ttm-list-li-content">
                            Sustainability
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                          <span className="ttm-list-li-content">
                            Maintainace
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      <ul className="ttm-list ttm-list-style-icon">
                        <li>
                          <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                          <span className="ttm-list-li-content">
                            Unparalleled Support
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                          <span className="ttm-list-li-content">
                            Help You Make Smart decisions
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="separator">
                    <div className="sep-line dashed" />
                  </div>
                  <div className="row no-gutters">
                    <div className="col-md-6 col-sm-6">
                      <div className="featured-icon-box style1 left-icon right-border">
                        <div className="">
                          <img alt="sign" src="/images/about-sign.png" />
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h5>James Ordo</h5>
                          </div>
                          <div className="featured-desc">
                            <p>Lead Engineer</p>
                          </div>
                        </div>
                      </div>
                      <section className="token-utilities" />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="featured-icon-box style1 without-icon right-border">
                        <div className="featured-content">
                          <div className="featured-title">
                            <h5>
                              <i
                                aria-hidden="true"
                                className="fa fa-phone-square"
                              />
                              +1(201) 899-0384
                            </h5>
                          </div>
                          <div className="featured-desc">
                            <p>Reach Us on Whatsapp</p>
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

        {/* Token Utilities */}
        <TokenUtilities />
        {/* Token Utilities End */}

        <section className="ttm-row ttm-bgcolor-darkgrey ttm-bg ttm-bgimage-yes bg-img1 about-services-section clearfix">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-2 col-sm-1" />
              <div className="col-lg-6 col-md-8 col-sm-10">
                <div className="section-title text-center with-desc clearfix">
                  <div className="title-header mb-60">
                    <h5>WHY CHOOSE US</h5>
                    <h2 className="title">
                      The Call To manage Our Planet Resources Ties Us Generally
                      Together
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-1" />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="row align-items-center ptb-50 res-991-ptb-20 iconalign-before-heading-row">
                  <div className="col-md-4">
                    <div className="featured-icon-box iconalign-before-heading style1">
                      <div className="featured-content">
                        <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                          <i className="ti ti-world" />
                        </div>
                        <div className="featured-title">
                          <h5 className="mb-0">Our Mission</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <p className="mb-0 ml-30 res-767-mt-20 res-767-ml-10">
                      The core motivation behind Greenagrichain&apos;s presence
                      is to advance agricultural progress and work towards a
                      more sustainable future.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center ptb-50 res-991-ptb-20 iconalign-before-heading-row">
                  <div className="col-md-4">
                    <div className="featured-icon-box iconalign-before-heading style1">
                      <div className="featured-content">
                        <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                          <i className="ti ti-bar-chart" />
                        </div>
                        <div className="featured-title">
                          <h5 className="mb-0">Impact</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <p className="mb-0 ml-30 res-767-mt-20 res-767-ml-10">
                      By collaborating with our investors, the agricultural
                      projects we manage are addressing climate change through
                      the adoption of sustainable practices and technologies.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center ptb-50 res-991-ptb-20 iconalign-before-heading-row">
                  <div className="col-md-4">
                    <div className="featured-icon-box iconalign-before-heading style1">
                      <div className="featured-content">
                        <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                          <i className="ti ti-zip" />
                        </div>
                        <div className="featured-title">
                          <h5 className="mb-0">Our Strategies</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <p className="mb-0 ml-30 res-767-mt-20 res-767-ml-10">
                      We assess and analyze the impact of each investment on
                      local communities and its broader societal effects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
