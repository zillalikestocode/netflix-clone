import Link from "next/link";
import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

function TrendingItem({ movie }: any) {
  const [hover, setHover] = useState(false);
  const [images, setImages]: any = useState({});
  const [tvImg, setTv]: any = useState({});
  console.log(movie);
  useEffect(() => {
    async function fetchImages() {
      const image: any = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=images&include_image_language=en,${movie.original_language}`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
      const tv: any = await fetch(
        `https://api.themoviedb.org/3/tv/${movie.id}/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=images&include_image_language=en,${movie.original_language}`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
      setTv(tv);
      setImages(image);
    }
    fetchImages();
  }, []);
  return (
    <Link href={`/movie/[id]`} as={`/movie/${movie.id}`}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="shadow-2xl cursor-pointer trending-item shadow-black relative"
      >
        <div
          className={`absolute item
           top-0 bottom-0 items-center h-full justify-center bg-black/50 right-0 left-0`}
        >
          {movie?.media_type === "movie" ? (
            <img
              src={`http://image.tmdb.org/t/p/original/${images?.logos?.[0]?.file_path}`}
              className="h-32"
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/original/${tvImg?.logos?.[0]?.file_path}`}
              className="h-32"
            />
          )}
        </div>
        <img
          className=""
          src={`http://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
        />
      </div>
    </Link>
  );
}

export default TrendingItem;
