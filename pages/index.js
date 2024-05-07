import Image from "next/image";
import ParticleContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";
import Link from "next/link";

import { fadeIn } from "../variants";
const Home = () => {
  const text = `Hi there! I'm Erzhan Murasbekov, a passionate front-end developer with a
            keen eye for crafting captivating digital experiences. Welcome to my
            corner of the web, where creativity meets functionality and
            innovation drives every pixel.`;
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full custom-height xl:h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div className="text-center flex flex-col justify-center xl:pt-1 xl:text-left h-full container mx-auto ">
          <motion.h1
            className="h1"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden">
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden">
            {text}
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <Link href={"/work"}></Link>
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0 2xl:w-[1600px]">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <ParticleContainer />
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute
          -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
