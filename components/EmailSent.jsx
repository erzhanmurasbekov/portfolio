import Image from "next/image";

const EmailSent = () => {
  return (
    <div className="bg-green-200/30 px-4 rounded-full absolute right-16 top-14 w-32 flex justify-between animate-ping-once opacity-100 transition-opacity duration-500">
      <p className="text-xs text-white mt-1">Email sent</p>
      <Image
        className={` right-0 `}
        src={"/check.png"}
        width={25}
        height={50}
        key={123123}
        alt=""
      />
    </div>
  );
};

export default EmailSent;
