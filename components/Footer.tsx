import { useRouter } from "next/router";

function Footer() {
  return (
    <footer className="mt-10 text-white text-3xl font-['NF'] px-10 bg-[#121212] py-5">
      <div className="space-y-3">
        <h4>Netflix clone Made with &#128151; by Emmanuel Ngoka</h4>
        <p className="text-lg">
          All images and information used on this site was inspired by{" "}
          <a
            href="https://netflix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="credits"
          >
            Netflix
          </a>{" "}
          and is brought to you by{" "}
          <a
            href="https://themoviedb.org"
            target="_blank"
            rel="noopener noreferrer"
            className="credits"
          >
            TMDB
          </a>
        </p>
        <p className="text-lg">
          The movie details page was also inspired by{" "}
          <a
            href="https://dribbble.con/shashanksahay"
            target="_blank"
            rel="noopener noreferrer"
            className="credits"
          >
            Shashank Sahay
          </a>
          . Check out his other designs.
        </p>
        <button className="bg-netflixDark p-2 text-lg rounded-md">
          Log Out
        </button>
      </div>
    </footer>
  );
}

export default Footer;
