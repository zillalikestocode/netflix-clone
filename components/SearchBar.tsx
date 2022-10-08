import { XIcon } from "@heroicons/react/solid";

const { motion } = require("framer-motion");

function SearchBar({ query, set, close }: any) {
  function remove() {
    close(false);
    set("");
  }
  const variants = {
    hidden: {
      width: 0,
    },
    animate: {
      width: "auto",
      transition: {
        ease: "linear",
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div className="flex items-center gap-2">
      <XIcon
        onClick={remove}
        className="text-gray-600 cursor-pointer w-7 h-7"
      />
      <motion.input
        variants={variants}
        initial="hidden"
        animate="animate"
        value={query}
        className="focus:outline-none placeholder:text-white p-1 px-3 rounded-lg bg-gray-600 text-white"
        placeholder="search"
        onChange={(e: any) => set(e.target.value)}
      />
    </motion.div>
  );
}

export default SearchBar;
