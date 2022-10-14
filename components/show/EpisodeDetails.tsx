import { useEffect, useState } from "react";

function EpisodeDetails({ episode, details }: any) {
  const [info, setDetails]: any = useState(null);
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        `https://api.themoviedb.org/3/tv/${details.id}/season/${episode.season_number}/episode/${episode.episode_number}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      ).then((res) => res.json());
      setDetails(result);
    }
    fetchData();
  }, [episode]);
  return (
    <div className="absolute bg-black/50 top-0 left-0 right-0 bottom-0">
      <div className="absolute space-y-2 text-2xl bottom-5 left-5">
        <p>
          S{info?.season_number}E{info?.episode_number}
        </p>
        <p>{info?.name}</p>
        <p className="text-lg text-gray-400">{info?.overview}</p>
      </div>
    </div>
  );
}

export default EpisodeDetails;
