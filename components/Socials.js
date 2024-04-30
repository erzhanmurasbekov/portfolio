import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

const Socials = () => {
  const icons = [
    RiYoutubeLine,
    RiInstagramLine,
    RiFacebookLine,
    RiDribbbleLine,
    RiBehanceLine,
    RiPinterestLine,
  ];
  return (
    <div className=" flex items-center gap-x-5 text-lg">
      {icons.map((Icon, index) => {
        return (
          <Link
            key={index}
            href={""}
            className="hover:text-accent transition-all duration-300">
            {" "}
            <Icon />{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
