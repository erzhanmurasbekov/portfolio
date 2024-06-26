// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowRight,
  RxArrowTopRight
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Creating unique identities that leave a lasting impression.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Creating aesthetically pleasing designs that engage and inspire.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Creating high-performance websites delivering outstanding user experiences.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description:
      "Writing engaging copy that captivates audiences and drives action.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Maximizing search engine rankings and enhancing online presence for optimal visibility and engagement.",
  },
];
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      // freeMode={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[240px] sm:h-[340px]">
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl to-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              <div className="text-3xl">
                
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
