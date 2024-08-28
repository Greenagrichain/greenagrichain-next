import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { AuthContextProvider } from "./_lib/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Greenagrichain",
  description: "No. 1 platform for cumulative investment returns",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
