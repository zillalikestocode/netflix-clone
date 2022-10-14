import Head from "next/head";
import { useState } from "react";
import ComingSoon from "../components/moviePage/ComingSoon";
import NowPlaying from "../components/moviePage/NowPlaying";
import Popular from "../components/moviePage/Popular";
import TopRated from "../components/moviePage/TopRated";

function Movies() {
  return (
    <div className="space-y-7">
      <Head>
        <title>Movies</title>
      </Head>
      <NowPlaying />
      <Popular />
      <ComingSoon />
      <TopRated />
    </div>
  );
}

export default Movies;
