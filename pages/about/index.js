import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaWordpress } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
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

  const aboutData = [
    {
      title: "skills",
      info: [
        {
          title: "Web Development",
          icons: [
            { icon: <FaHtml5 key={uuidv4()} />, title: "HTML" },
            { icon: <FaCss3 key={uuidv4()} />, title: "CSS" },
            { icon: <FaJs key={uuidv4()} />, title: "JS" },
            { icon: <FaReact key={uuidv4()} />, title: "React" },
            { icon: <SiNextdotjs key={uuidv4()} />, title: "Next.js" },
            { icon: <FaWordpress key={uuidv4()} />, title: "Wordpress" },
          ],
        },
        {
          title: "UI/UX Design",
          icons: [
            { icon: <FaFigma key={uuidv4()} />, title: "Figma" },
            { icon: <SiAdobephotoshop key={uuidv4()} />, title: "Photoshop" },
          ],
        },
      ],
    },
    {
      title: "experience",
      info: [
        {
          title: "Financial Analyst - 'Hunter Group'",
          stage: "2018 - 2019",
        },
        {
          title: "Front-end Developer - 'Emplosoft'",
          stage: "2020 - 2022",
        },
        {
          title: "Front-end Developer - 'Samsara'",
          stage: "2022 - present",
        },
      ],
    },
  ];

  return (
    <div className="custom-height xl:h-full bg-primary/30 xl:py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex custom-height pb-20 flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[80vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className="h2">
              Captivating <span className="text-accent">stories</span> birth
              magnificent designs.
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0">
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
                    <CountUp start={0} end={5} duration={3} /> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience
                  </div>
                </div>
                <div className="mt-2 relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={20} duration={3} /> +
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
            variants={fadeIn("up", 0.6)}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            className="w-full xl:max-w-[65%]">
            <div className="flex gap-x-4 justify-center xl:justify-normal xl:gap-x-8 mx-auto xl:mx-0 mb-4">
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
                    <div className="font-light mb-2 md:mb-0 w-max">
                      {item.title}
                    </div>
                    <div className="hidden md:flex">-</div>
                    <div className="">{item?.stage}</div>
                    <div className="flex -ml-6">
                      {item.icons?.map((icon, itemIndex) => {
                        return (
                          <div className="w-[53px] h-[32px]" key={itemIndex}>
                            <Tooltip title={icon.title} className="">
                              <Button>
                                {React.cloneElement(icon.icon, {
                                  className: "text-white text-2xl",
                                })}
                              </Button>
                            </Tooltip>
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
    </div>
  );
};

export default About;
