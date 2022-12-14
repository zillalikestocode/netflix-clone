import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";
import { RecoilRoot } from "recoil";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
