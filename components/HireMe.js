import Link from "next/link";
import { CircularText2 } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-12 flex items-center justify-center overflow-hidden md:right-4 md:left-auto md:top-2 md:bottom-auto xs:hidden">
      <div className="w-60 h-60 md:w-24 md:h-24 flex items-center justify-center relative">
        <CircularText2
          className={"fill-dark dark:fill-light animate-spin-slow"}
        />

        <Link
          href="mailto:nibirshakib@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light dark:text-dark text-light shadow-md border border-solid w-24 h-24 md:h-12 md:w-12 rounded-full hover:text-dark hover:bg-light hover:border-dark font-medium md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
