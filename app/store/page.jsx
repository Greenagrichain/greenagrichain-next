import React from "react";
import { products } from "app/products/storeData";
import { IconHeart } from "@tabler/icons-react";

export default function StoreExtended() {
  return (
    <>
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

            {/* Products */}

            <div className="product-container flex my-8 flex-wrap justify-center gap-3 gap-y-8 p-2">
              {products.slice(0, 5).map((product) => (
                <div
                  key={product.id}
                  className="product-sample hidden group flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md relative"
                >
                  <a className="relative flex h-60 overflow-hidden" href="#">
                    <img
                      alt="product image"
                      className="product-image absolute top-0 right-0 h-full w-full object-cover"
                      src={product.images[0]}
                    />
                  </a>

                  <div className="mt-4 px-4 grow pb-3 flex flex-col justify-center">
                    <a href="#">
                      <h5 className="product-title text-xl tracking-tight text-slate-900">
                        {product.name}
                      </h5>
                      <p className="truncate">{product.description}</p>
                    </a>
                    <div className="mt-2 mb-5">
                      <p>
                        <span className="product-price text-3xl font-bold text-slate-900">
                          $
                          {(product.discountPrice
                            ? product.discountPrice
                            : product.price
                          ).toLocaleString()}
                        </span>
                        {product.discountPrice && (
                          <>
                            <span className="product-discount text-sm text-slate-900 line-through">
                              ${product.price.toLocaleString()}
                            </span>
                            <span className="product-discount-percent text-red-400">
                              -{product.discountPercentage}% off
                            </span>
                          </>
                        )}
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
                </div>
              ))}
            </div>

            {/* Products */}

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
    </>
  );
}
