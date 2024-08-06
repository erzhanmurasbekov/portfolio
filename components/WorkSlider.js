import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const workSlides = {
  slides: [
    {
      title: "Cleaning company website",
      path: "/thumb55.jpg",
      website: "https://aba-cleaning.netlify.app/",
    },

    {
      title: "Hunter website",
      path: "/thumb22.jpg",
      website: "https://huntergroup.netlify.app",
    },
    {
      title: "Movie finder",
      path: "/thumb33.jpg",
      website: "https://movie-erzhan.netlify.app",
    },
    {
      title: "Taxi clone",
      path: "/thumb44.jpg",
      website: "https://yayindex.netlify.app",
    },
    {
      title: "Google clone",
      path: "/thumb11.jpg",
      website: "https://erzhan-google-clone.netlify.app",
    },
  ],
};

const WorkSlider = () => {
  // Function to group slides into chunks of 4
  const chunkSlides = (slides, size) => {
    const chunks = [];
    for (let i = 0; i < slides.length; i += size) {
      chunks.push(slides.slice(i, i + size));
    }
    return chunks;
  };

  // Group slides into chunks of 4
  const slideChunks = chunkSlides(workSlides.slides, 4);

  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-full sm:h-[480px]"
      slidesPerView={1}>
      {slideChunks.map((chunk, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 gap-4">
            {chunk.map((slide, subIndex) => (
              <Link href={slide.website} key={subIndex} target="_blank">
                <div className="relative overflow-hidden flex items-center justify-center group rounded-md">
                  <div className="flex items-center h-[105px] sm:h-52 justify-center relative overflow-hidden cursor-pointer">
                    <Image
                      className="rounded-lg"
                      src={slide.path}
                      width={500}
                      height={300}
                      alt={slide.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-300 rounded-md"></div>
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2">
                        <div>{slide.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
