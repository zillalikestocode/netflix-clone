import { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
const { motion } = require("framer-motion");

function Airing({ airing }: any) {
  const increase = {
    scale: 1.2,
    zIndex: 50,
  };
  return (
    <div className="">
      <h4 className="ml-10 ">TV Shows On the Air</h4>
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        navigation={{ nextEl: ".front", prevEl: ".back" }}
        className="!flex  !justify-center !pt-5 !relative"
      >
        <div className="absolute top-0 flex justify-center h-full items-center right-0 left-0 bottom-0">
          <div className="back cursor-pointer z-50">
            <ChevronLeftIcon className="w-10 h-10" />
          </div>
          <div className="front ml-auto right-5 cursor-pointer z-50">
            <ChevronRightIcon className="w-10 h-10" />
          </div>
        </div>
        {airing.map((item: any, i: any) => {
          return (
            <SwiperSlide key={i} className="!shrink-0 !z-10 !w-auto trending !mx-0.5">
              <Link href="/show/[id]" as={`/show/${item.id}`}>
                <motion.div whileHover={increase}>
                  <div className="absolute bg-black/25 top-0 left-0 right-0 bottom-0">
                    <h4 className="absolute bottom-3 left-3 text-xl font-medium">
                      {item.name}
                    </h4>
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${item.backdrop_path}`}
                  />
                </motion.div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Airing;
