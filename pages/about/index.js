import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={uuidv4()} />,
          <FaCss3 key={uuidv4()} />,
          <FaJs key={uuidv4()} />,
          <FaReact key={uuidv4()} />,
          <SiNextdotjs key={uuidv4()} />,
          <SiFramer key={uuidv4()} />,
          
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key={uuidv4()} />,
          <SiAdobexd key={uuidv4()} />,
          <SiAdobephotoshop key={uuidv4()} />,
        ],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
];
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  const text = `With a love for clean code and pixel-perfect designs, I specialize
            in transforming ideas into interactive web applications that leave a
            lasting impression. Whether it's building responsive layouts,
            optimizing performance, or enhancing user experiences, I thrive on
            turning challenges into opportunities to showcase my skills and
            expertise.`;
  return (
    <div className="z-0 h-full bg-primary/30 xl:py-32 text-center xl:text-left ">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className="z-0 hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar className={""} />
      </motion.div>
      <div className="z-10 container mx-auto custom-height overflow-y-auto pb-20 xl:pb-0 flex flex-col gap-y-6 items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 z-10">
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="z-10 max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            {text}
          </motion.p>
          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={3} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              <div className="mt-2 relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={3} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              <div className="mt-2 relative flex-1 after:w-[1px] ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={60} duration={3} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, Itemindex) => {
              return (
                <div
                  key={Itemindex}
                  onClick={() => {
                    setIndex(Itemindex);
                  }}
                  className={`${
                    index === Itemindex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-2xl text-white" key={itemIndex}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
