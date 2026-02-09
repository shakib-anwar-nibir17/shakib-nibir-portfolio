"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const BoxIcon = ({ name, image }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
      className="group relative h-40 w-full rounded-2xl bg-gradient-to-br from-light/10 to-transparent p-px shadow-xl dark:from-dark/50"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-2xl bg-light dark:bg-dark border border-dark/20 dark:border-light/20 shadow-2xl overflow-hidden"
      >
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mouseXSpring, mouseYSpring],
              ([x, y]) => `radial-gradient(600px circle at ${x * 100 + 50}% ${y * 100 + 50}%, rgba(255,165,0,0.1), transparent 40%)`
            ),
          }}
        />

        <div className="absolute top-0 -right-2 -z-10 w-[100%] h-[100%] rounded-2xl bg-dark/20 dark:bg-light/10 blur-sm" />
        <Image
          src={image}
          alt={name}
          className="w-16 h-16 object-contain filter drop-shadow-md mx-auto"
          style={{
            transform: "translateZ(50px)",
          }}
        />
        <p
          className="mt-3 text-center text-[10px] font-black uppercase tracking-widest text-dark/70 dark:text-light/70"
          style={{
            transform: "translateZ(50px)",
          }}
        >
          {name}
        </p>
      </div>
    </motion.div>
  );
};

export default BoxIcon;
