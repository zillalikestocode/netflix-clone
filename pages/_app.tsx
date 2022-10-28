import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";
import { RecoilRoot } from "recoil";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  const router = useRouter();
  const { pathname } = router;
  const show = router.pathname === "/";
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
      {show && <Footer />}
    </SessionProvider>
  );
}

export default MyApp;
