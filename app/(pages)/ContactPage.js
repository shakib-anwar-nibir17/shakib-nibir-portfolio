/* eslint-disable no-unused-vars */
"use client";
import AnimateText from "@/components/AnimateText";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  return (
    <>
      <AnimateText
        text="Thank you for your interest"
        className="mt-20 text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl"
      />
      <motion.div
        className="h-full mt-10"
        initial={{ y: "200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.75 }}
      >
        <div className="flex items-center px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-4 justify-center dark:text-light">
          {/* FORM CONTAINER */}
          <form
            ref={form}
            className="h-1/2 lg:h-full w-3/4 lg:w-full bg-light dark:bg-dark rounded-xl text-xl flex flex-col gap-8 justify-center py-20"
          >
            <span>Your Message,</span>
            <textarea
              rows={6}
              className="bg-light dark:bg-dark border-b-2 border-b-dark dark:border-b-light outline-none resize-none"
              name="user_message"
            />
            <span>Your mail address:</span>
            <input
              name="user_email"
              type="email"
              className="bg-light dark:bg-dark border-b-2 border-b-black dark:border-b-light outline-none"
            />
            <span>Regards</span>
            <button className="bg-primary/75 dark:bg-primaryDark rounded font-semibold text-light dark:text-dark p-4">
              Send
            </button>
            {success && (
              <span className="text-green-600 font-semibold">
                Your message has been sent successfully!
              </span>
            )}
            {error && (
              <span className="text-red-600 font-semibold">
                Something went wrong!
              </span>
            )}
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;
