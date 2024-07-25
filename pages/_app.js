import "../styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "../components/Transition";


import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <link rel="preload" href="/avatar.png" as="image" />
        <title>ErzhanM Portfolio</title>
        <link rel="icon" href='/cloud.png'/>
      </Head>
      <div className="hidden lg:block w-1/4">
        <p className="absolute transform -rotate-90 bottom-2/4">
          Nope I didnt forget this part
        </p>
      </div>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full ">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default MyApp;
