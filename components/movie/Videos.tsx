import { useEffect, useState } from "react";
import Youtube, { YouTubeProps } from "react-youtube";

const Videos = ({ details }: any) => {
  const [vids, setVids]: any = useState();

  useEffect(() => {
    async function fetchVids() {
      const video: any = await fetch(
        `https://api.themoviedb.org/3/movie/${details.id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
      setVids(video.results);
    }
    fetchVids();
  }, []);
  console.log(vids);
  const ytVideos = vids?.filter((item: any) => item.site === "YouTube");
  return (
    <div className="text-white h-[25vh] overflow-y-scroll video">
      {ytVideos?.map((item: any) => {
        return <Player video={item} key={item?.key} />;
      })}
    </div>
  );
};

function Player({ video }: any) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "195",
    width: "320",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="flex items-start">
      <Youtube videoId={video?.key} opts={opts} onReady={onPlayerReady} />
    </div>
  );
}
export default Videos;
