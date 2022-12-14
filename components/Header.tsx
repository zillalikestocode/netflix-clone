import Link from "next/link";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

function Header() {
  const [scroll, setScroll]: any = useState();
  const [searchQuery, setQuery] = useState("");
  const [search, setSearch] = useState(false);
  const { data: session }: any = useSession();
  const router = useRouter();
  function handleScroll() {
    const position = window.pageYOffset;
    setScroll(position);
  }
  const notLogin = router.pathname !== "/login";
  function searchAll() {
    if (searchQuery) {
      router.push("/search/[query]", `/search/${searchQuery}`);
    }
    setSearch(true);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`w-full ${
        router.pathname === "/" || "/login" ? "fixed" : "sticky bg-black"
      } z-20`}
    >
      <nav className={`w-full ${scroll > 10 && 'bg-black/50'} flex px-10 py-4 text-gray-200 items-center`}>
        <Link href="/">
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            className="w-24"
          />
        </Link>
        {session && notLogin && (
          <div className="flex ml-10 items-center space-x-5">
            <Link href="/">
              <button
                className={`hover:text-red-600 ${
                  router.pathname === "/" && "text-red-600"
                }`}
              >
                Home
              </button>
            </Link>
            <Link href="/shows">
              <button
                className={`hover:text-red-600 ${
                  router.pathname === "/shows" && "text-red-600"
                }`}
              >
                TV Shows
              </button>
            </Link>
            <Link href="/movies">
              <button
                className={`hover:text-red-600 ${
                  router.pathname === "/movies" && "text-red-600"
                }`}
              >
                Movies
              </button>
            </Link>
          </div>
        )}
        {session && notLogin && (
          <div className="flex ml-auto items-center space-x-5 text-white">
            <div className="flex items-center gap-2">
              {search && (
                <SearchBar
                  close={setSearch}
                  query={searchQuery}
                  set={setQuery}
                />
              )}
              <SearchIcon
                onClick={searchAll}
                className="icon cursor-pointer hover:text-netflix"
              />
            </div>
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
