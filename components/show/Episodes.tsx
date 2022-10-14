import { useEffect, useState } from "react";

function Episodes({ details, setEpisode }: any) {
  const [season, setSeason]: any = useState(null);
  const [episode, setNumber]: any = useState(null);
  const [error, setError] = useState(false);
  async function sendEpisode() {
    const result = await fetch(
      `https://api.themoviedb.org/3/tv/${details.id}/season/${season}/episode/${episode}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    ).then((res) => res.json());
    if (result.name) {
      setEpisode(result);
    } else {
      setError(true);
    }
  }
  return (
    <div className="text-white space-y-2 h-[25vh] overflow-y-scroll video">
      <h4 className="">Search Episodes</h4>
      <div className="flex items-start gap-3">
        <div className="flex flex-col gap-2 w-fit">
          <input
            type="number"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            placeholder="Season"
            className="w-fit focus:outline-none bg-gray-400/50 rounded-md placeholder:text-white text-white p-2 py-1"
          />
          <input
            type="number"
            value={episode}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Episode"
            className="w-fit focus:outline-none bg-gray-400/50 rounded-md placeholder:text-white text-white p-2 py-1"
          />
          <button
            onClick={sendEpisode}
            className="bg-netflix rounded-md p-2 w-fit m-auto"
          >
            Search
          </button>
        </div>
        {error && (
          <div className="text-center text-netflix text-xl">
            No such episode or season
          </div>
        )}
      </div>
    </div>
  );
}

export default Episodes;
