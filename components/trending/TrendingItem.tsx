import Link from "next/link";
import { useEffect, useState } from "react";
const { motion } = require("framer-motion");

function TrendingItem({ movie }: any) {
  const increase = {
    scale: 1.2,
    zIndex: 50,
  };
  const [hover, setHover] = useState(false);
  const [movieGenre, setMovie]: any = useState([]);
  const [tvGenre, setTv]: any = useState([]);
  const genre = movie?.media_type === "movie" ? movieGenre : tvGenre;
  useEffect(() => {
    async function fetchImages() {
      const image: any = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
      const tv: any = await fetch(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
      setTv(tv.genres);
      setMovie(image.genres);
    }
    fetchImages();
  }, []);
  const hide = {
    initial: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };
  const link =
    movie.media_type === "movie"
      ? {
          href: `/movie/[id]`,
          as: `/movie/${movie.id}`,
        }
      : {
          href: `/show/[id]`,
          as: `/show/${movie.id}`,
        };

  return (
    <Link {...link}>
      <motion.div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="shadow-2xl cursor-pointer trending-item shadow-black relative"
        whileHover={increase}
      >
        <motion.div
          variants={hide}
          whileHover="show"
          initial="initial"
          className={`absolute
           top-0 bottom-0  h-full px-3 bg-black/50 right-0 left-0`}
        >
          <div className="flex flex-col gap-1 item-start absolute bottom-5">
            <h4 className="text-xl font-['NF_M']">
              {movie?.title || movie?.name}
            </h4>
            <div className="flex gap-2 flex-wrap items-start text-sm text-gray-400">
              {genre
                ?.filter((item: any) => movie?.genre_ids?.includes(item.id))
                .map((item: any, i: any) => (
                  <h4 key={i}>{item.name}</h4>
                ))}
            </div>
          </div>
        </motion.div>
        <img
          className=""
          src={`http://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
        />
      </motion.div>
    </Link>
  );
}

export default TrendingItem;
