// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Google clone",
          path: "/thumb1.png",
          website: "https://erzhan-google-clone.netlify.app",
        },
        {
          title: "Hunter website",
          path: "/thumb2.png",
          website: "https://huntergroup.netlify.app",
        },
        {
          title: "Movie finder",
          path: "/thumb3.png",
          website: "https://movie-erzhan.netlify.app",
        },
        {
          title: "Taxi clone",
          path: "/thumb4.png",
          website: "https://yayindex.netlify.app",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]">
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {slide.images.map((image, index) => {
                return (
                  <Link href={`${image.website}`} target="_blank">
                    <div
                      key={index}
                      className="relative overflow-hidden flex items-center justify-center group">
                      <div className="flex items-center justify-center relative overflow-hidden cursor-pointer">
                        <Image
                          className="rounded-lg "
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />

                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-300"></div>
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 ">
                            <div>{image.title}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
