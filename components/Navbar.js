"use client";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MoonIcon, SunIcon } from "./Icons";
import Logo from "./Logo";

const CustomLinks = ({ href, title, className = "" }) => {
  const path = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          path === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLinks = ({ href, title, className = "", toggle }) => {
  const path = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}
      <span
        className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 bg-light ${
          path === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState();

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-4 py-6 font-medium flex items-center justify-between min-h-[7vh] dark:text-light relative">
      <button
        onClick={handleChange}
        className="flex-col justify-center items-center hidden lg:flex"
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm my-0.5  ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="flex justify-between items-center w-full lg:hidden">
        <nav>
          <CustomLinks href="/" title="Home" className="mr-4" />
          <CustomLinks href="/about" title="About" className="mx-4" />
          <CustomLinks href="/skills" title="Skills" className="mx-4" />
          <CustomLinks href="/projects" title="Projects" className="mx-4" />
          <CustomLinks href="/contact" title="Contact" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center gap-3">
          <motion.a
            href="https://github.com/shakib-anwar-nibir17"
            target={"_blank"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiGithub className="text-2xl" />
          </motion.a>

          <motion.a
            href="http://www.linkedin.com/in/nibir17shakib"
            target={"_blank"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiLinkedin className="text-2xl" />
          </motion.a>

          <button
            className="flex items-center justify-center rounded-full p-1"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="xs:min-w-[90vw] hidden  min-w-[70vw] lg:flex flex-col  justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 transition-all ease-out duration-300"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLinks href="/" title="Home" toggle={handleChange} />
            <CustomMobileLinks
              href="/about"
              title="About"
              toggle={handleChange}
            />
            <CustomMobileLinks
              href="/skills"
              title="Skills"
              toggle={handleChange}
            />
            <CustomMobileLinks
              href="/projects"
              title="Projects"
              toggle={handleChange}
            />
            <CustomMobileLinks
              href="/contact"
              title="Contact"
              toggle={handleChange}
            />
          </nav>

          <nav className="flex items-center justify-center gap-3 text-light dark:text-dark">
            <motion.a
              href="https://github.com/shakib-anwar-nibir17"
              target={"_blank"}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <SiGithub className="text-2xl" />
            </motion.a>

            <motion.a
              href="http://www.linkedin.com/in/nibir17shakib"
              target={"_blank"}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <SiLinkedin className="text-2xl" />
            </motion.a>

            <button
              className="flex items-center justify-center rounded-full p-1"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] flex items-center translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
