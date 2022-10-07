import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useState } from "react";

const CastCrews = ({ credits }: any) => {
  const [closed, setClosed] = useState(true);
  const cast: any = credits?.cast;
  return (
    <div>
      <h4 className="flex gap-1">
        Casts{" "}
        {closed ? (
          <ChevronDownIcon
            className="w-7 h-7 cursor-pointer"
            onClick={() => setClosed(false)}
          />
        ) : (
          <ChevronUpIcon
            onClick={() => setClosed(true)}
            className="w-7 h-7 cursor-pointer"
          />
        )}
      </h4>
      {!closed && (
        <div className="ml-5 text-white">
          {cast?.map((person: any, i: any) => {
            return (
              <h4 key={i}>
                {person.name} as {person.character}
              </h4>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CastCrews;
