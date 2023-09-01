import Navbar from "./components/navigation/navbar";
import "./globals.css";
import RightSidebar from "./components/sidebars/rightSideBar";
// import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "MythsNoMore - Debunking Myths",
  description: "Debunking Myths Platform: Busting Myths, One Myth at a Time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans flex bg-[#1f2937]">
        <Navbar />
        <div className="flex-grow">
          <div className="flex flex-col h-screen appBg">
            <div className="flex-grow">{children}</div>
          </div>
        </div>
        <RightSidebar />
      </body>
    </html>
  );
}
