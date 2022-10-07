import Link from "next/link";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

function Header() {
  const { data: session }: any = useSession();
  const router = useRouter();
  const notLogin = router.pathname !== "/login";
  return (
    <header className="w-full fixed z-20">
      <nav className={`w-full flex px-10 py-4 text-gray-200 items-center`}>
        <Link href="/">
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            className="w-24"
          />
        </Link>
        {session && notLogin && (
          <div className="flex ml-10 items-center space-x-5">
            <Link href="/">
              <button className="hover:text-red-600">Home</button>
            </Link>
            <button className="hover:text-red-600">TV Shows</button>
            <button className="hover:text-red-600">Movies</button>
            <button className="hover:text-red-600">Recently Added</button>
          </div>
        )}
        {session && notLogin && (
          <div className="flex ml-auto itemx-center space-x-5 text-white">
            <SearchIcon className="icon" />
            <BellIcon className="icon" />
          </div>
        )}
        {session && (
          <div className={`flex items-center ${!notLogin && "ml-auto"}`}>
            <img
              src={session?.user?.image}
              className="w-10 ml-5 h-10 rounded-full"
            />
            <button
              onClick={() => signOut()}
              className="bg-netflix p-2 ml-5 rounded text-white "
            >
              Sign Out
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
