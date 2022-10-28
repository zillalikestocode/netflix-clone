import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import Link from "next/link";

function Upcoming({ upcoming }: any) {
  console.log(upcoming);
  return (
    <div className="space-y-5">
      <h4 className="ml-10 ">Upcoming movies</h4>
      <Swiper
        slidesPerView="auto"
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        className="!flex !relative"
      >
        {upcoming.map((item: any) => {
          return (
            item.poster_path && (
              <SwiperSlide
                key={item.id}
                className="!shrink-0 upcoming !w-44 mx-2.5 cursor-pointer"
              >
                <Link href="/movie/[id]" as={`/movie/${item.id}`}>
                  <div className="flex flex-col gap-2 items-center">
                    <img
                      src={`https://images.tmdb.org/t/p/w300/${item.poster_path}`}
                      className="w-44"
                    />
                    <h4 className="text-center text-gray-400">{item.title}</h4>
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

export default Upcoming;
