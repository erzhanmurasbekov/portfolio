import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";
import { Roboto } from "next/font/google";
const quicksand = Roboto({
  subsets: ["latin"],
  weight:['300','700']
});
const Header = () => {
  
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-3 py-8">
          <Link className={`${quicksand.className} text-4xl`} href={"/"}>
           <span className="font-black">Erzhan</span> <span className="font-thin">Muras</span><span className="text-accent">.</span>
           
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
