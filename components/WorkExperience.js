"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FaShare } from "react-icons/fa";
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
            className="text-primary dark:text-primaryDark capitalize flex items-center gap-2"
          >
            {time} | {company} <FaShare size={12} />
          </Link>
        </h1>
        <span className="capitalize text-dark/75 dark:text-light/75 font-medium">
          {address}
        </span>
        <p className=" md:text-sm text-primary dark:text-primaryDark font-medium">
          {work}
        </p>
      </div>
    </li>
  );
};

const WorkExperience = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 lg:my-32 md:my-20">
      <h2 className="font-bold text-6xl xl:text-5xl lg:text-4xl md:text-3xl mb-32 w-full text-center dark:text-light">
        Work Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-0 bg-dark dark:bg-primaryDark h-[150%] md:h-[100%] w-1 origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            company="LawnHive"
            position="Front-end Developer(Intern)"
            companyLink="https://lawnhive.com/"
            address="Mirpur Dhaka, Bangladesh"
            time="April 2024 - August 2024"
            work="Intern Completed"
          />
          <Details
            company="PERCEPTRON BD"
            position="Software Developer(Intern)"
            companyLink="https://www.perceptron.site"
            address="Mohakhali, Dhaka,Bangladesh"
            time="July 2024 - August 2024"
            work="Active"
          />
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
