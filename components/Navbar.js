"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SvgComponentGithub, SvgComponentLinkedIn } from "./Icons";
import Logo from "./Logo";

const CustomLinks = ({ href, title, className = "" }) => {
  const path = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          path === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-6 font-medium flex items-center justify-between text-xl">
      <nav>
        <CustomLinks href="/" title="Home" className="mr-4" />
        <CustomLinks href="/about" title="About" className="mx-4" />
        <CustomLinks href="/projects" title="Projects" className="mx-4" />
        <CustomLinks href="/contact" title="Contact" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center gap-3">
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <SvgComponentGithub className="w-10 h-8" />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <SvgComponentLinkedIn className="w-10 h-10" />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
