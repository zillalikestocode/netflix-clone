import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function Personalities({ people }: any) {
  console.log(people);
  return (
    <div className="flex flex-col items-center gap-5 pt-5">
      <h4>Notable Personalities</h4>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="!flex !items-center !w-[700px] h-44 !justify-center"
        slidesPerView={4}
      >
        {people?.map((item: any) => {
          return (
            item.profile_path && (
              <SwiperSlide className="!shrink-0">
                <img
                  src={`https://images.tmdb.org/t/p/w300/${item.profile_path}`}
                  className="w-32 h-32 object-scale-down bg-gray-900 rounded-full"
                />
              </SwiperSlide>
            )
          );
        })}
      </Swiper>
    </div>
  );
}

export default Personalities;
