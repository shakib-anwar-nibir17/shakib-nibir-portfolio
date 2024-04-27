"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <motion.div className="flex justify-center items-center mt-2">
      <MotionLink
        href="/"
        className="w-16 xl:w-14 lg:w-12 md:w-10 sm:w-8 h-16 xl:h-14 lg:h-12 md:h-h-10 sm:h-8 bg-dark text-light border border-solid border-transparent dark:border-light flex items-center justify-center rounded-full text-2xl md:text-xl sm:text-sm font-bold"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        SN
      </MotionLink>
    </motion.div>
  );
};

export default Logo;
