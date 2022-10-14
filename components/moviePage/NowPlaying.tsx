import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function NowPlaying() {
  const router = useRouter();
  const movie = router.pathname === "/movies";
  const [page, setPage]: any = useState(1);
  const [nowPlaying, setPlaying]: any = useState(null);
  useEffect(() => {
    async function fetchRes() {
      const { pathname } = router;
      if (pathname === "/movies") {
        const result = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${page}`
        ).then((res) => res.json());
        setPlaying(result.results);
      } else {
        const result = await fetch(
          `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${page}`
        ).then((res) => res.json());
        setPlaying(result.results);
      }
    }
    fetchRes();
  }, [page]);
  return (
    <div className="text-white px-10">
      <div className="flex">
        <h4 className="text-xl mb-3">{movie ? "Now Playing" : "On The Air"}</h4>
        <div className="gap-3 flex ml-auto items-center">
          <ChevronLeftIcon
            className="w-7 h-7 text-netflix cursor-pointer"
            onClick={() =>
              setPage((prev: any) => {
                if (prev > 1) return prev - 1;
                return 1;
              })
            }
          />
          <h4>{page}</h4>
          <ChevronRightIcon
            className="w-7 h-7 text-netflix cursor-pointer"
            onClick={() => setPage((prev: any) => prev + 1)}
          />
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
        slidesPerView="auto"
        className="!flex !relative"
      >
        <div className="absolute flex justify-center items-center m-auto h-full top-0 right-0 left-0 bottom-0">
          <ChevronLeftIcon className="w-10 h-10 z-50 cursor-pointer prev" />
          <ChevronRightIcon className="w-10 h-10 ml-auto z-50 cursor-pointer next" />
        </div>
        {nowPlaying?.map((item: any) => {
          return (
            item.backdrop_path && (
              <SwiperSlide
                className="!shrink-0 !mx-2 !w-auto !cursor-pointer"
                key={item.id}
              >
                <Link
                  href={movie ? "/movie/[id]" : "/show/[id]"}
                  as={movie ? `/movie/${item.id}` : `/show/${item.id}`}
                >
                  <div>
                    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/50">
                      <div className="absolute bottom-3 left-3 space-y-1">
                        <h4 className="text-xl font-['NF_M']">
                          {item.title || item.name}
                        </h4>
                        <h4 className="text-sm text-gray-300">
                          {item.release_date?.split("-")[0] ||
                            item.first_air_date?.split("-")[0]}
                        </h4>
                      </div>
                    </div>
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${item.backdrop_path}`}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            )
          );
        })}
      </Swiper>
    </div>
  );
}

export default NowPlaying;
