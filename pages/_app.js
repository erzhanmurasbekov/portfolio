import "../styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "../components/Transition";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div>
      <div className="hidden lg:block w-1/4">
        <p className="absolute transform -rotate-90 bottom-2/4">
          Nope I didn't forget this part
        </p>
      </div>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full overflow-y-auto">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default MyApp;
