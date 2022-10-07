import Link from "next/link";

const More = ({ similar }: any) => {
  console.log(similar);
  return (
    <div className="h-[25vh] overflow-y-scroll space-y-5 video">
      {similar.map((item: any, i: any) => {
        return (
          <Link href={`/movie/${item.id}`} key={i}>
            <div className="flex items-start gap-5">
              <img
                src={`http://image.tmdb.org/t/p/w300/${item.poster_path}`}
                className="w-44"
              />
              <div>
                <h4 className="text-3xl">{item.title}</h4>
                <h4 className="text-gray-400 text-sm">
                  {item.release_date.split("-")[0]}
                </h4>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default More;
