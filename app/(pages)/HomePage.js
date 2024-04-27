import AnimateText from "@/components/AnimateText";
import { ContactIcon, LinkArrow } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import banner from "../../public/banner.png";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center px-32 gap-20 py-10">
      <div class="w-1/2 flex justify-center">
        <Image src={banner} alt="banner" priority className="w-3/4" />
      </div>
      <div className="w-1/2 flex flex-col">
        <AnimateText
          text="Bringing Ideas to Life Through Code and Creativity."
          className="text-5xl text-left"
        />
        <p className="my-4 font-medium dark:text-light">
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development
        </p>
        <div className="flex items-center self-start mt-2">
          <Link
            href="/Shakib_Nibir_Resume.pdf"
            target={"_blank"}
            className="flex items-center bg-dark dark:bg-white dark:text-dark dark:border-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-primaryDark hover:dark:border-light"
            download={true}
          >
            Resume <LinkArrow className="w-6 ml-1" />
          </Link>
          <Link
            href="/contact"
            className="ml-4 text-lg font-medium text-dark dark:text-light border-2 border-dark dark:border-light p-2 px-6 rounded-lg border-solid flex items-center"
          >
            Contact{" "}
            <ContactIcon className="w-6 ml-1 text-dark dark:text-light" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
