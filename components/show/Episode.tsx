import { useEffect, useState } from "react";

function Episode({ episode }: any) {
  const [episodeDetails, setDetails]: any = useState(null);
  useEffect(() => {
    async function fetchDetails() {
      const details = await fetch(
        `https://api.themoviedb.org/3/tv/${episode.show_id}/season/${episode.season_number}/episode/${episode.episode_number}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      ).then((res) => res.json());
      setDetails(details);
    }
    fetchDetails();
  }, [episode]);
  return (
    <div className="relative">
      <div className="absolute bg-black/50 top-0 left-0 bottom-0 right-0">
        <div className="absolute left-3 bottom-3 flex text-xl flex-col">
          <h4 className="">
            S{episode.season_number}E{episode.episode_number}
          </h4>
          <p>{episodeDetails?.name}</p>
        </div>
      </div>
      <img src={`https://image.tmdb.org/t/p/w300/${episode.still_path}`} />
    </div>
  );
}

export default Episode;
