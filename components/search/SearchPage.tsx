import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const { motion } = require("framer-motion");

function SearchPage({ searchItems, page, setPage }: any) {
  const router = useRouter();
  const { query } = router.query;
  const hover = {
    scale: 1.2,
    zIndex: 50,
  };
  const hide = {
    initial: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };
  function add() {
    setPage((prev: any) => prev + 1);
  }
  function reduce() {
    if (page === 1) {
      return;
    } else {
      setPage((prev: any) => prev - 1);
    }
  }
  return (
    <div className="font-['NF'] px-5">
      <div className="flex items-center">
        <h4 className="text-xl md:text-2xl font-['Poppins'] font-semibold mb-5 text-white lg:text-3l">
          Search Results for: {query}
        </h4>
        <div className="ml-auto text-netflix flex gap-2 items-center">
          <ChevronLeftIcon
            onClick={reduce}
            className="w-10 h-10 cursor-pointer"
          />
          <h4>{page}</h4>
          <ChevronRightIcon
            className="w-10 h-10 cursor-pointer"
            onClick={add}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {searchItems?.map((item: any, i: any) => {
          return (
            item.poster_path && (
              <motion.div whileHover={hover} className="relative h-fit">
                <motion.div
                  variants={hide}
                  initial="initial"
                  whileHover="show"
                  className="absolute top-0 left-0 h-full bottom-0 right-0 bg-black/50 "
                >
                  <div className="flex absolute bottom-5 text-white left-3 flex-col ">
                    <h4 className="font-['NF_M'] text-lg">
                      {item.title || item.name}
                    </h4>
                    <h4 className="text-gray-400 text-sm">
                      {item.release_date?.split("-")[0] ||
                        item.first_air_date?.split("-")[0]}
                    </h4>
                  </div>
                </motion.div>
                <img
                  className="w-56"
                  src={`http://image.tmdb.org/t/p/w300/${item.poster_path}`}
                />
              </motion.div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default SearchPage;
