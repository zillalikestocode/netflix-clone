import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Upcoming({ upcoming }: any) {
  return (
    <div>
      <Swiper slidesPerView="auto" className="!flex !relative">
        {upcoming.map((item: any) => {
          <SwiperSlide></SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}

export default Upcoming;
