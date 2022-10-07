import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Similar = ({ similar }: any) => {
  return (
    <div className="mt-3">
      <p>Recommended Movies</p>
      <Swiper
        slidesPerView="auto"
        modules={[Navigation]}
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
        className="!flex !h-[170px]"
      >
        <div className="absolute text-white flex top-0 right-0 bottom-0 left-0 right-0 justify center">
          <ChevronLeftIcon className="prev w-10 h-10 cursor-pointer z-50" />
          <ChevronRightIcon className="next w-10 h-10 cursor-pointer ml-auto z-50" />
        </div>
        {similar?.map((item: any) => {
          return (
            <SwiperSlide className="!shrink-0 !w-auto !mx-2" key={item.id}>
              <Link href={`/movie/${item.id}`}>
                <img
                  src={`http://image.tmdb.org/t/p/w300/${item.backdrop_path}`}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Similar;
