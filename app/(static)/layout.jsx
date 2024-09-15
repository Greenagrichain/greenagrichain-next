import React from "react";
import "/public/css/bootstrap.min.css";
import "/public/css/animate.css";
import "/public/css/owl.carousel.css";
import "/public/css/font-awesome.css";
import "/public/css/themify-icons.css";
import "/public/css/flaticon.css";
import "/public/revolution/css/layers.css";
import "/public/revolution/css/settings.css";
import "/public/css/prettyPhoto.css";
import "/public/css/shortcodes.css";
import "/public/css/main.css";
import "/public/css/responsive.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Greenagrichain",
    template: `Greenagrichain | %s`,
  },
  keywords: ["Greenagrichain", "Greenagrichain", "Technology"],
  authors: [{ name: "TheGreenChain" }],
};

export default function layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
