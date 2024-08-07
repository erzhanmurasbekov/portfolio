import Circles from "../../components/Circles";
import {motion} from 'framer-motion'
import { fadeIn } from "../../variants";
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
const Work = () => {
  const text = `Explore a curated selection of projects that showcase my expertise
              and passion for front-end development. Each project reflects my
              commitment to creating intuitive user interfaces, leveraging
              modern technologies, and delivering exceptional user experiences.
              From e-commerce platforms to personal portfolio websites, I've
              tackled diverse challenges and collaborated with teams to bring
              innovative ideas to life.`;
  return (
    <div className="custom-height xl:h-full bg-primary/30 xl:py-36 flex items-center">
      <Circles />
      <div className="container mx-auto xl:pb-11">
        <div className="custom-height overflow-y-auto pb-20 flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className="h2 xl:mt-12">
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              {text}
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            className="w-full xl:max-w-[65%]">
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
