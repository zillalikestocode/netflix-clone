import CastCrews from "./CastsCrews";
import Companies from "./Companies";

const Details = ({ credits, details }: any) => {
  return (
    <div className="h-[25vh] text-gray-400 overflow-y-scroll video">
      <CastCrews credits={credits} />
      <h4>
        Release Date: <span className="text-white">{details.release_date}</span>
      </h4>
      <Companies details={details} />
    </div>
  );
};

export default Details;
