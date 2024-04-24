"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const Stats = () => {
  const AnimateNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref);

    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, motionValue, value]);

    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);

    return <span ref={ref}></span>;
  };

  return (
    <div className="col-span-2 flex flex-col items-end justify-between">
      <div className="flex flex-col items-end justify-center">
        <span className="font-bold inline-block text-7xl">
          <AnimateNumbers value={10} />+
        </span>
        <h2 className="text-xl font-medium capitalize text-dark/75">
          Project Completed
        </h2>
      </div>
      <div className="flex flex-col items-end justify-center">
        <span className="font-bold inline-block text-7xl">
          <AnimateNumbers value={1} />+
        </span>
        <h2 className="text-xl font-medium capitalize text-dark/75">
          Years of Hands on Experience
        </h2>
      </div>
      <div className="flex flex-col items-end justify-center">
        <h2 className="text-3xl font-bold capitalize text-dark">
          Full Stack Developer
        </h2>
      </div>
    </div>
  );
};

export default Stats;
