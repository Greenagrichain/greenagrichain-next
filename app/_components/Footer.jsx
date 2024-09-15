import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandFacebook,
} from "@tabler/icons-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "Who we are", href: "/about" },
  { name: "Offers", href: "/services" },
  { name: "FAQs", href: "/faqs" },
  { name: "Pricing", href: "/investments" },
  { name: "Products", href: "/products" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <>
      <Logo_Telegram_NewsLetter />
      <footer className="bg-[#4f4626] text-white divide-y divide-gray-500/50 pt-40">
        <div className="links flex flex-wrap justify-center gap-4 container p-2 *:grow *:w-min">
          <div className="link-item space-y-5">
            <h3 className="text-xl text-white">About Greenagrichain</h3>
            <div className="w-10 h-1 bg-secondary"></div>
            <p>
              Empowering a Sustainable Future: Innovative Agricultural Solutions
              for a Greener World
            </p>
            <div className="social-icons flex gap-3">
              {[
                IconBrandFacebook,
                IconBrandInstagram,
                IconBrandLinkedin,
                IconBrandTwitter,
              ].map((SocialIcon, _) => (
                <a key={_} href="#" rel="noreferrer">
                  <SocialIcon
                    size={32}
                    className="hover:bg-primary text-white p-2 rounded-full bg-slate-900"
                  />
                </a>
              ))}
            </div>
            <Button>Read more</Button>
          </div>
          <div className="link-item space-y-5">
            <h3 className="text-xl text-white">Quick Links</h3>
            <div className="w-10 h-1 bg-secondary"></div>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href + link.name} className="list-['\02713']">
                  <a
                    href={link.href}
                    className="text-white underline hover:opacity-70 px-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="link-item space-y-5">
            <h3 className="text-xl text-white">Our Branches</h3>
            <div className="w-10 h-1 bg-secondary"></div>
            <p>
              1401 21ST ST
              <br />
              STE R<br />
              Sacramento, California 95811
              <br />
              201 Fox Point Cir,
              <br />
              Weatherford,TX 76087 USA
              <br />
            </p>
            <p>
              MD ABU RAYAT
              <br />
              71-75 Shelton Street
              <br />
              Convent Garden
              <br />
              London WC2H 9JQ
              <br />
            </p>
          </div>
        </div>
        <div className="copyright-text text-center p-2">
          <p>Copyright © 2019 - 2024Greenagrichain. All rights reserved.</p>
          <ul className="flex justify-center divide-x">
            {["Terms", "Offers", "Privacy"].map((link) => (
              <li key={link}>
                <a href="#" className="text-white px-2 hover:opacity-70">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}

// function NewsLetter() {
//   return (
//     <section className="news-letter bg-[url(/images/bg-image/row-bgimage-4.jpg)]">
//       <div className="flex flex-wrap justify-center text-center divide-x container">
//         <div className="nl-flex-item w-fit p-4">
//           <p className="text-sm text-muted">Whatsapp</p>
//           <p className="text-lg/3 font-bold text-primary">Our Address</p>
//           <div className="text-sm">
//             201 Fox Point Cir, Weatherford,TX 76087 USA
//           </div>
//         </div>
//         <div className="nl-flex-item w-fit p-4">
//           <p className="text-lg/3 font-bold capitalize text-primary">
//             Talk to expert
//           </p>
//           <a href="https://wa.me/+1%20(609)%203095419">
//             Message <br />
//             +1 (609) 3095419
//           </a>
//           <p className="text-lg/3 font-bold capitalize text-primary">
//             Message us on Whatsapp
//           </p>
//         </div>
//         <div className="nl-flex-item w-fit p-4">
//           <p className="text-lg/3 font-bold capitalize text-primary">
//             Email us
//           </p>
//           <p className="text-sm">support@greenagrichain.org</p>
//         </div>
//       </div>
//       <form
//         action="https://greenagrichain.com/subscribe-to-newsletter"
//         className="newsletter-form w-[500px] mx-auto"
//         data-mailchimp="true"
//         id="subscribe-form"
//         method="post"
//       >
//         <Input
//           defaultValue="1Tb717FB6UkGz3OicvssuYjz6AIbu03LyoeeChFP"
//           name="_token"
//           type="hidden"
//         />
//         <div className="mailchimp-inputbox clearfix" id="subscribe-content">
//           <i className="fa fa-envelope-o" />
//           <input
//             name="email"
//             placeholder="Your Email Address.."
//             required
//             type="email"
//           />
//           <Input
//             type="submit"
//             value="SUBMIT"
//             className="bg-secondary hover:bg-primary    "
//           />
//         </div>
//         <div id="subscribe-msg" />
//       </form>
//     </section>
//   );
// }

function Logo_Telegram_NewsLetter() {
  return (
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
                    <a href="https://wa.me/+1 (609) 3095419" target="_blank">
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
                      action="https://greenagrichain.com/subscribe-to-newsletter"
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
  );
}
