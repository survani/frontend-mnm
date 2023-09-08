import Navbar from "./components/navigation/navbar";
import "./globals.css";
import RightSidebar from "./components/sidebars/rightSideBar";
import { ClerkProvider } from "@clerk/nextjs";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MythsNoMore - Debunking Myths",
  description: "Debunking Myths Platform: Busting Myths, One Myth at a Time",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={lato.className}>
        <body className="text-black">
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
