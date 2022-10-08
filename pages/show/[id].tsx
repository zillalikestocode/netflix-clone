import { StarIcon } from "@heroicons/react/solid";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navigation from "../../components/show/Navigation";

export default function ({ details, similar }: any) {
  const [credits, setCredits]: any = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const [nav, setNav] = useState("Overview");
  useEffect(() => {
    async function fetchImages() {
      const creditsres = await fetch(
        `https://api.themoviedb.org/3/tv/${details.id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      ).then((res) => res.json());
      setCredits(creditsres);
    }
    fetchImages();
  }, [id]);
  return (
    <div className="text-white bg-black">
      <Head>
        <title>{details.name}</title>
      </Head>
      <div className="flex items-end px-10 gap-10">
        <div className="h-full flex justify-center w-[30vw] shrink-0 items-center">
          <img
            src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`}
            className="w-[30vw] cover"
          />
        </div>
        <div className="flex-grow flex flex-col gap-6 px-10">
          <div className="flex">
            <div className="space-y-2">
              <h4 className="text-xl details md:text-3xl lg:text-4xl font-medium">
                {details.name}
              </h4>
              <div className="flex text-gray-400">
                <p>{details.first_air_date.split("-")[0]}</p>
              </div>
            </div>
            <p className="flex items-center text-lg ml-auto md:text-xl gap-2">
              {details.vote_average.toFixed(1)}
              <StarIcon className="w-7 h-7 text-yellow-400" />
            </p>
          </div>
          <div>
            <Navigation
              nav={nav}
              details={details}
              credits={credits}
              setNav={setNav}
              similar={similar}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const details = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  ).then((res) => res.json());
  const similar = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  ).then((res) => res.json());
  return {
    props: {
      details,
      similar: similar.results,
    },
  };
}
