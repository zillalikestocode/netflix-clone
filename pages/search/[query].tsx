import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchPage from "../../components/search/SearchPage";

export default function () {
  const router = useRouter();
  const { query } = router.query;
  const [page, setPage] = useState(1);
  const [searchRes, setRes] = useState(null);
  useEffect(() => {
    async function fetchResults() {
      const results = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&query=${String(query)}&page=${page}`
      ).then((res) => res.json());
      setRes(results.results);
    }
    fetchResults();
  }, [page, query]);
  console.log(searchRes);
  return (
    <div>
      <Head>
        <title>Search results for: {query}</title>
      </Head>
      <SearchPage setPage={setPage} searchItems={searchRes} page={page} />
    </div>
  );
}
