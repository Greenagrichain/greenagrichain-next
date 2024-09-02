import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { AuthContextProvider } from "./_lib/authContext";
import { Toaster } from "@/components/ui/sonner";
import { SWRConfig } from "swr";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Greenagrichain",
  description: "No. 1 platform for cumulative investment returns",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
