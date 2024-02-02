import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import SideBar from "@/components/shared/SideBar";
import Player from "@/components/shared/Player";
import BottomBar from "@/components/shared/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Baze",
  description: "Music Streaming and Downloading Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex-props-b">
          <SideBar />
          <div className="w-screen md:w-full h-screen overflow-scroll p-4">
            {children}
          </div>
        </div>

        <div className="flex flex-col fixed bottom-0 w-full z-50">
          <Player />
          <BottomBar />
        </div>
      </body>
    </html>
  );
}
