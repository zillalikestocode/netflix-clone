import type { NextPage } from "next";
import Head from "next/head";
import { useRecoilState } from "recoil";
import Popular from "../components/Popular";
import Trending from "../components/trending/Trending";

const Home: NextPage = ({ popular, trending }: any) => {
  return (
    <div className="text-white ">
      <Head>
        <title>Z-netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="video">
        <Popular popular={popular} />
        <Trending trending={trending} />
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const popular = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const trending = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then((res) => res.json());
  return {
    props: {
      popular: popular.results,
      trending: trending.results,
    },
  };
}
