import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Episode from "./Episode";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function EpisodeSlide({ seasons, setEpisode }: any) {
  console.log(seasons);
  return (
    <div className="w-full relative">
      <p>Episodes</p>
      <Swiper
        slidesPerView="auto"
        modules={[Navigation]}
        navigation={{ nextEl: ".forward", prevEl: ".backward" }}
        className="!flex !h-[170px] !max-w-[100%]"
      >
        <div className="absolute text-white flex top-0 right-0 bottom-0 left-0 right-0 justify center">
          <ChevronLeftIcon className="backward w-10 h-10 cursor-pointer z-50" />
          <ChevronRightIcon className="forward w-10 h-10 cursor-pointer ml-auto z-50" />
        </div>
        {seasons
          .sort((a: any, b: any) => b.season_number - a.season_number)
          .map((season: any) => {
            return season?.episodes
              ?.sort((a: any, b: any) => b.episode_number - a.episode_number)
              ?.filter((item: any, i: any) => i < 10)
              ?.map((episode: any) => {
                return (
                  episode.still_path && (
                    <SwiperSlide
                      className="!shrink-0 !w-fit block !mx-2 !cursor-pointer"
                      onClick={() => setEpisode(episode)}
                    >
                      <Episode key={episode.id} episode={episode} />
                    </SwiperSlide>
                  )
                );
              });
          })}
      </Swiper>
    </div>
  );
}

export default EpisodeSlide;
