import { MusicCarousel } from "@/components";
import Link from "next/link";

export const revalidate = 200;

export default async function Home() {
  const response = await fetch("https://saavn.dev/modules");
  const data = await response.json();
  return (
    <main className="w-full h-full mb-[11rem] md:mb-[7rem]">
      <div className="header flex-props-b">
        <h1 className="md:text-4xl text-3xl font-semibold font-sans">
          Hi There, <strong className="text-green-500">User</strong>
        </h1>
        <div className="controls flex-props-b gap-5">
          <div className="theme h-8 w-8 bg-black rounded-full"></div>
          <div className="theme h-8 w-8 bg-black rounded-full"></div>
        </div>
      </div>
      <div className="search py-5 px-3">
        <Link href={"/search"}>
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-gray-600 p-2 text-xl rounded-2xl w-[92%]"
          />
        </Link>
      </div>
      <div className="trending Songs flex flex-col">
        <h2 className="text-3xl font-semibold font-sans">Trending Now</h2>
        <div className="w-full flex">
          <MusicCarousel data={data.data.trending.songs} type={"songs"} />
        </div>
      </div>
      <div className="trending Songs flex flex-col">
        <h2 className="text-3xl font-semibold font-sans">Albums</h2>
        <div className="w-full flex">
          <MusicCarousel data={data.data.trending.albums} type={"albums"} />
        </div>
      </div>
    </main>
  );
}
