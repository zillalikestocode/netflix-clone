import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import { useEffect } from "react";
import TrendingItem from "./TrendingItem";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

function Trending({ trending }: any) {
  return (
    <div className="translate-">
      <h4 className="px-10 mb-2">Trending Now</h4>
      <div>
        <Swiper
          modules={[Navigation]}
          slidesPerView="auto"
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
          className="!flex !pb-10  !justify-center !pt-5 !relative"
        >
          <div className="absolute top-0 flex justify-center right-0 left-0 bottom-0">
            <div className="prev absolute top-12 left-5 cursor-pointer z-50">
              <ChevronLeftIcon className="w-10 h-10" />
            </div>
            <div className="next absolute top-12 right-5 cursor-pointer z-50">
              <ChevronRightIcon className="w-10 h-10" />
            </div>
          </div>
          {trending.map((item: any, i: any) => {
            return (
              <SwiperSlide
                key={i}
                className="!shrink-0 !w-auto trending !mx-0.5"
              >
                <TrendingItem movie={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Trending;
