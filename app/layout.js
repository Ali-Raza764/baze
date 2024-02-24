import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/shared/SideBar";
import Player from "@/components/shared/Player";
import BottomBar from "@/components/shared/BottomBar";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Baze",
  description: "Music Streaming and Downloading Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen overflow-hidden box-border`}>
        <NextTopLoader showSpinner={false} color="rgb(34 197 94 /1)" />
        <div className="flex-1 flex overflow-hidden z-0">
          <SideBar />
          <div className="flex-1 overflow-y-auto md:px-8 md:py-4 p-3 pb-[10rem]">{children}</div>
        </div>

        <div className="flex md:static fixed bottom-0 z-50 w-screen overflow-hidden flex-col">
          <Player />
          <BottomBar />
        </div>
      </body>
    </html>
  );
}
