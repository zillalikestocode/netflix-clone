import Details from "./Details";
import More from "./More";
import Overview from "./Overview";
import Videos from "./Videos";

const { motion } = require("framer-motion");

const Navigation = ({ nav, similar, setNav, details, credits }: any) => {
  const navItems = ["Overview", "Trailers & More", "Details", "More Like This"];
  return (
    <div className="space-y-5 overview">
      <div className="flex w-full justify-between nav relative">
        {navItems.map((item, i) => {
          return (
            <motion.div
              onClick={() => setNav(item)}
              key={i}
              className="flex cursor-pointer flex-col gap-3"
            >
              <h4
                className={`px-2 text-gray-400 ${
                  item === nav && "!text-white"
                }`}
              >
                {item.toUpperCase()}
              </h4>
              {nav === item && (
                <motion.div layoutId="nav" className="bg-netflix w-full h-1" />
              )}
            </motion.div>
          );
        })}
      </div>
      <div>
        {nav === "Overview" && <Overview details={details} credits={credits} />}
        {nav === "Trailers & More" && <Videos details={details} />}
        {nav === "Details" && <Details credits={credits} details={details} />}
        {nav === "More Like This" && <More similar={similar} />}
      </div>
    </div>
  );
};

export default Navigation;
