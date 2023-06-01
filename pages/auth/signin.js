import Loader from "@/components/Loader";
import { getProviders, signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Signin({ providers }) {
    const { data : session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (!loading && session) {
            router.push('/')
        }
    }, [loading, session, router])

    if (session) return <Loader />

  return (
    <div className="bg-black flex flex-col items-center h-screen pt-40 spac-y-8">
      <Head>
        <title>Login - Spotify</title>
      </Head>
      <img
        src="https://rb.gy/y9mwtb"
        
        className="animate-pulse w-[600px] h-[250px]"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button onClick={() => signIn(provider.id)} className="text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146]">
            Sign In with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
