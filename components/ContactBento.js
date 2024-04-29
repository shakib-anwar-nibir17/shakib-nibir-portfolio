/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone } from "react-icons/fi";
import {
  SiDiscord,
  SiFacebook,
  SiGmail,
  SiLinkedin,
  SiWhatsapp,
} from "react-icons/si";
import { twMerge } from "tailwind-merge";

export const ContactBento = () => {
  return (
    <div className="bg-light dark:bg-dark px-4 py-12 md:py-6 text-dark dark:text-light w-1/2 lg:w-full">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <LocationBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-dark/50 dark:border-light bg-light dark:bg-dark  p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6 sm:col-span-12">
    <h1 className="mb-12 text-2xl font-medium leading-tight">
      Hi, I'm Shakib Nibir <span></span>
      <span className="text-dark/40 dark:text-light/75">
        I am interested in frontend opportunity focused on MERN technology both
        remote and onsite. Feel free to connect to have elaborate discussion.
      </span>
    </h1>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block className="col-span-6 bg-light dark:bg-dark xl:col-span-12  border border-solid dark:border-light">
      <h2 className="flex items-center gap-2 h-full place-content-center text-xl  text-dark dark:text-light">
        <FiPhone className="dark:text-primaryDark text-3xl  text-primary/75" />
        <span>+8801770054720</span>
      </h2>
    </Block>
    <Block className="col-span-6 xl:col-span-12  bg-light dark:bg-dark border border-solid dark:border-light">
      <h2 className="flex items-center gap-2 h-full place-content-center text-xl text-dark dark:text-light">
        <SiGmail className="dark:text-primaryDark text-3xl text-primary/75" />
        <span>nibirshakib@gmail.com</span>
      </h2>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#25D366] dark:bg-[#25D366] md:col-span-3"
    >
      <a
        href="https://wa.link/9vmp0v"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiWhatsapp />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#1877F2] dark:bg-[#1877F2] md:col-span-3"
    >
      <a
        href="https://www.facebook.com/profile.php?id=61554163965538"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiFacebook />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#0077B5] dark:bg-[#0077B5] md:col-span-3"
    >
      <a
        href="http://www.linkedin.com/in/nibir17shakib"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-light"
      >
        <SiLinkedin />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#7289da] dark:bg-[#7289da] md:col-span-3"
    >
      <a
        href="https://discordapp.com/users/756949318782550149"
        target="_blank"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiDiscord />
      </a>
    </Block>
  </>
);

// const AboutBlock = () => (
//   <Block className="col-span-12 text-3xl leading-snug">
//     <p>
//       My passion is building cool stuff.{" "}
//       <span className="text-zinc-400">
//         I build primarily with React, Tailwind CSS, and Framer Motion. I love
//         this stack so much that I even built a website about it. I've made over
//         a hundred videos on the subject across YouTube and TikTok.
//       </span>
//     </p>
//   </Block>
// );

const LocationBlock = () => (
  <Block className="col-span-12 flex justify-center items-center gap-4">
    <FiMapPin className="text-3xl dark:text-primaryDark text-primary/75" />
    <p className="text-center text-lg text-dark dark:text-light">
      Pallabi, Dhaka, Bangladesh
    </p>
  </Block>
);

// const EmailListBlock = () => (
//   <Block className="col-span-12 md:col-span-9">
//     <p className="mb-3 text-lg">Join my mailing list</p>
//     <form
//       onSubmit={(e) => e.preventDefault()}
//       className="flex items-center gap-2"
//     >
//       <input
//         type="email"
//         placeholder="Enter your email"
//         className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
//       />
//       <button
//         type="submit"
//         className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
//       >
//         <FiMail /> Join the list
//       </button>
//     </form>
//   </Block>
// );

// const Logo = () => {
//   // Temp logo from https://logoipsum.com/
//   return (
//     <svg
//       width="40"
//       height="auto"
//       viewBox="0 0 50 39"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="mx-auto mb-12 fill-zinc-50"
//     >
//       <path
//         d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
//         stopColor="#000000"
//       ></path>
//       <path
//         d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
//         stopColor="#000000"
//       ></path>
//     </svg>
//   );
// };

// const Footer = () => {
//   return (
//     <footer className="mt-12">
//       <p className="text-center text-zinc-400">
//         Made with ❤️ by{" "}
//         <a href="#" className="text-red-300 hover:underline">
//           @tomisloading
//         </a>
//       </p>
//     </footer>
//   );
// };
