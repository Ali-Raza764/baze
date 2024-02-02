import { MusicCarousel } from "@/components";

export const revalidate = 100;

export default async function Home() {
  const response = await fetch("https://saavn.me/modules");
  const data = await response.json();
  return (
    <main className="w-full flex flex-col gap-y-4 pb-[35rem]">
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
