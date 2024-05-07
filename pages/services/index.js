import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  const text = `As a front-end developer, I leverage the latest web technologies
              and best practices to create seamless, intuitive interfaces that
              engage and delight users. From HTML and CSS to JavaScript
              frameworks like React, I'm constantly honing my craft
              to stay at the forefront of web development trends.`;
  return (
    <div className="custom-height xl:h-full bg-primary/30 xl:py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex custom-height overflow-y-auto pb-16 flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className="h2">
              My Services <span className="text-accent">.</span>
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
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
