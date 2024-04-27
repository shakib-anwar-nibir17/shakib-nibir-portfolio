"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-8 last:mb-0 w-[60%]  mx-auto flex flex-col"
    >
      <LiIcon reference={ref} />
      <div className="space-y-2">
        <h3 className="capitalize font-bold text-2xl md:text-xl dark:text-light">
          {position}
        </h3>
        <h1>
          <Link
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            {time} | {company}
          </Link>
        </h1>
        <span className="capitalize text-dark/75 dark:text-light/75 font-medium">
          {address}
        </span>
        <p className="text-dark md:text-sm dark:text-light font-medium">
          {work}
        </p>
      </div>
    </li>
  );
};

const Education = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 lg:my-32 md:my-20">
      <h2 className="font-bold text-6xl xl:text-5xl lg:text-4xl md:text-3xl mb-32 w-full text-center dark:text-light">
        Education and Certification
      </h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-0 bg-dark dark:bg-primaryDark h-[150%] md:h-[100%] w-1 origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            company="Military Institute of Science and Technology"
            position="B. Sc. in Petroleum and Mining Engineering"
            companyLink="https://mist.ac.bd/"
            address="Mirpur Cantonment, Dhaka, Bangladesh"
            time="2019-2023"
            work="Graduated"
          />
          <Details
            company="Programming Hero"
            position="Complete Web Development"
            companyLink="https://www.programming-hero.com"
            address="Level-4, 34, Awal Centre, Banani, Dhaka"
            time="Fall 2023"
            work="This is a 6 month comprehensive web development course where I learnt about Html, Css and Js. I have grasp a solid foundation on working with frameworks like React Js with Tailwind Css and developed projects using these technology. I have also gained ideas about full stack development."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
