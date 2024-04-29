"use client";

import AnimateText from "@/components/AnimateText";
import { ContactBento } from "@/components/ContactBento";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <>
      <AnimateText
        text="Contact Me"
        className="mt-20 text-7xl xl:text-6xl lg:text-5xl xs:text-4xl"
      />
      <motion.div
        className="h-full mt-10"
        initial={{ y: "200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.75 }}
      >
        <div className="flex flex-row lg:flex-col gap-10 md:gap-4 items-center px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-4 justify-center dark:text-light mb-14">
          <ContactBento />
          {/* FORM CONTAINER */}
          <ContactForm />
        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;
