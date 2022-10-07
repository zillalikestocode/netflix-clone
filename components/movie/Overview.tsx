const Overview = ({ details, credits }: any) => {
  const casts = credits?.cast
    ?.filter((item: any, i: any) => i <= 2)
    .map((item: any) => item.name);
  const genres = details.genres.map((item: any) => item.name);
  const producers = credits?.crew
    ?.filter(
      (item: any, i: any) => item.job === ("Producer" || "Executive Producer")
    )
    ?.filter((item: any, i: any) => i <= 2)
    ?.map((i: any) => i.name);
  console.log(details);
  return (
    <div className="space-y-5 h-[25vh] overview overflow-y-scroll video">
      <p>{details.overview}</p>
      <div>
        <table className="table-auto">
          <tbody>
            <tr>
              <td className="text-gray-400">Starring</td>
              <td>{casts?.join(", ")}</td>
            </tr>
            <tr>
              <td className="text-gray-400 w-28 h-7 truncate">Producers</td>
              <td className="">{producers?.join(", ")}</td>
            </tr>
            <tr>
              <td className="text-gray-400">Genre</td>
              <td>{genres.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
