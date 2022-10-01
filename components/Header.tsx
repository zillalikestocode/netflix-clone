import Link from "next/link";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <header className="w-full absolute">
      <nav className="w-full flex px-10 py-4 text-white/50 items-center">
        <Link href="/">
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            className="w-24"
          />
        </Link>
        {session && (
          <div className="flex ml-10 items-center space-x-5">
            <button className="hover:text-red-600">Home</button>
            <button className="hover:text-red-600">TV Shows</button>
            <button className="hover:text-red-600">Movies</button>
            <button className="hover:text-red-600">Recently Added</button>
          </div>
        )}
        {session && (
          <div className="flex ml-auto itemx-center space-x-5 text-white">
            <SearchIcon className="icon" />
            <BellIcon className="icon" />
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
