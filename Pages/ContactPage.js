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
        className="mt-20 text-6xl"
      />
      <motion.div
        className="h-full mt-10"
        initial={{ y: "200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.75 }}
      >
        <div className="flex items-center px-32 justify-center gap-20">
          {/* FORM CONTAINER */}
          <form
            ref={form}
            className="h-1/2 lg:h-full lg:w-1/2 bg-light rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
          >
            <span>Your Message,</span>
            <textarea
              rows={6}
              className="bg-light border-b-2 border-b-dark outline-none resize-none"
              name="user_message"
            />
            <span>Your mail address:</span>
            <input
              name="user_email"
              type="email"
              className="bg-transparent border-b-2 border-b-black outline-none"
            />
            <span>Regards</span>
            <button className="bg-primary/75 rounded font-semibold text-light p-4">
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
