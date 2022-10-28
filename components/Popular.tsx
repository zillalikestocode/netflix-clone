import { PlayIcon } from "@heroicons/react/solid";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Link from "next/link";

const Popular = ({ popular }: any) => {
  const [images, setImages]: any = useState(null);
  const chosen = popular.sort(
    (a: any, b: any) => b.vote_count - a.vote_count
  )[0];
  useEffect(() => {
    async function fetchImages() {
      const image: any = await fetch(
        `https://api.themoviedb.org/3/movie/${chosen.id}/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=images&include_image_language=en,null`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
      setImages(image);
    }
    fetchImages();
  }, []);
  console.log(images);
  console.log(chosen);
  return (
    <div className="relative">
      <img
        src={`http://image.tmdb.org/t/p/w1280/${chosen.backdrop_path}`}
        className="relative gradient-mask-b-4 cover w-full"
      />
      <div className="absolute top-[30%] space-y-3 left-10">
        {/* {images?.logo ? (
          <img src={`http://image.tmdb.org/t/p/w92/${chosen.poster_path}`} />
        ) : (
          <h4 className="text-xl md:text-2xl lg:text-5xl text-white font-bold ">
            {chosen.title}
          </h4>
        )}  */}
        <img
          src={`http://image.tmdb.org/t/p/original/${images?.logos?.[0]?.file_path}`}
          className="w-80"
        />
        <p className="text-sm md:text-md lg:text-lg h-40 text-ellipsis overflow-y-hidden font-light w-[450px] text-white">
          {chosen.overview}
        </p>
        <div className="flex gap-3 items-center">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center text-lg px-3 bg-netflix rounded p-2 text-white gap-2">
              <PlayIcon className="w-7 h-7" />
              Play
            </button>
          </a>
          <Link href="/movie/[id]" as={`/movie/${chosen.id}`}>
            <button className="flex items-center text-lg bg-black/50 rounded p-2 text-white gap-2">
              <InformationCircleIcon className="w-7 h-7" />
              More Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popular;
