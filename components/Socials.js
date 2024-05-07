import Link from "next/link";
import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine
  
} from "react-icons/ri";

const Socials = () => {
  const links = [
    { icon: RiInstagramLine, link: "https://www.instagram.com/murasbekov" },
    {
      icon: RiLinkedinLine,
      link: "https://www.linkedin.com/in/erzhanmurasbekov/",
    },
  ];
  return (
    <div className=" flex items-center gap-x-5 text-lg">
      {links.map(({icon:Icon,link}, index) => {
        return (
          <Link
          target="_blank"
            key={index}
            href={link}
            className="hover:text-accent cursor-pointer transition-all duration-300">
            
            <Icon />{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
