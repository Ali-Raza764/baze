import { MusicCarousel } from "@/components";
import FeedCarousel from "@/components/feed/FeedCarousel";
import Link from "next/link";

export const revalidate = 10000;

export default async function Home() {
  return (
    <main className="w-full h-full mb-[11rem] md:mb-[7rem]">
      <Header />
      <Feed />
    </main>
  );
}


const Header = () => {
  return (
    <>
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
            className="outline-none bg-gray-600 p-2 text-xl rounded-2xl w-full"
          />
        </Link>
      </div>
    </>
  );
};

const Feed = async () => {
  const response = await fetch("https://saavn.dev/modules");
  const data = await response.json();
  const feedValues = [
    { name: "Trending", type: "songs", data: data.data.trending.songs },
    { name: "Albums", type: "albums", data: data.data.trending.albums },
    { name: "Playlists", type: "playlists", data: data.data.playlists },
  ];
  return (
    <>
      {feedValues.map((value) => {
        return (
          <div className="trending Songs flex flex-col mt-3" key={value.type}>
            <h2 className="text-3xl font-semibold font-sans">{value.name}</h2>
            <div className="w-full flex">
              <FeedCarousel data={value.data} type={value.type} />
            </div>
          </div>
        );
      })}
       {/* <div className="trending Songs flex flex-col mt-3">
            <h2 className="text-3xl font-semibold font-sans">Trending</h2>
            <div className="w-full flex">
              <FeedCarousel data={data.data.trending.songs} type={"songs"} />
            </div>
          </div> */}
    </>
  );
};
