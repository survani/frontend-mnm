import Navbar from "../app/components/demo/navbar";
import "./globals.css";
import RightSidebar from "../app/components/demo/rightSideBar";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "MythsNoMore - Debunking Myths",
  description: "Debunking Myths Platform: Busting Myths, One Myth at a Time",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
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
    </ClerkProvider>
  );
}
