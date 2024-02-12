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
      <body className={`${inter.className} flex flex-col`}>
        <NextTopLoader showSpinner={false} color="rgb(34 197 94 /1)" />
        <div className="flex-props-b z-10">
          <SideBar />
          <div className="w-screen md:w-full md:h-[90vh] h-[80vh] page p-4 overflow-y-scroll">
            {children}
          </div>
        </div>

        <div className="bottom-0 z-50 flex flex-col h-[20vh] md:h-[10vh] ">
          <Player />
          <BottomBar />
        </div>
      </body>
    </html>
  );
}
