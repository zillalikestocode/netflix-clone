import { ChevronRightIcon } from "@heroicons/react/solid";
import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";

function Login({ providers }: any) {
  return (
    <div className="min-h-screen text-gray-100 flex justify-center items-center">
      <Head>
        <title>Login</title>
      </Head>
      <img
        src="https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg"
        className="absolute h-screen w-screen -z-10 opacity-50"
      />
      <div className="flex items-center space-y-5 flex-col w-96 text-center">
        <p className="text-xl md:text-2xl lg:text-3xl">
          Unlimited movies, TV shows and more.
        </p>
        {Object.values(providers).map((provider: any) => {
          return (
            <button
              key={provider.id}
              className="bg-netflix gap-1 font-light p-3 flex items-center text-lg md:text-xl w-fit rounded-sm"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
              <ChevronRightIcon className="w-7 h-7" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
