/* eslint-disable no-unused-vars */
"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ContactBento } from "./ContactBento";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();
  return (
    <motion.div
      className="h-full mt-10"
      initial={{ y: "200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.75 }}
    >
      <div className="flex flex-row lg:flex-col gap-10 md:gap-4 items-center px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-4 justify-center dark:text-light mb-14">
        <ContactBento />
        {/* FORM CONTAINER */}
        <form
          ref={form}
          className="h-full w-full bg-light dark:bg-dark rounded-xl text-xl flex flex-col gap-8 justify-center py-20 border border-solid border-dark dark:border-light px-10 sm:px-6"
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
  );
};

export default ContactForm;
