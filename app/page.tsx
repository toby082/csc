import Image from "next/image";
import fetchCats from "./lib/util";
import CatCard from "./components/CatCard";

export default async function Home() {
  const allCats = await fetchCats()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h1>All Cats [Fetch time:{new Date().toLocaleTimeString()}]</h1>
        <div className="" >
          {allCats?.map((cat) => <CatCard cat={cat} />)}
        </div>
      </section>
    </main>
  );
}
