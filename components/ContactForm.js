/* eslint-disable no-unused-vars */
"use client";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          Swal.fire({
            title: "Thank You",
            text: "Email has been sent successfully",
            icon: "success",
          });
        },
        () => {
          setError(true);
          Swal.fire({
            title: "Something went wrong",
            text: "Please try later",
            icon: "error",
          });
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className="h-full w-1/2 lg:w-full bg-light dark:bg-dark rounded-xl text-xl flex flex-col gap-8 justify-center py-20 border border-solid border-dark dark:border-light px-10 sm:px-6"
    >
      <span>Your Message,</span>
      <textarea
        rows={6}
        className="bg-light dark:bg-dark border-b-2 border-b-dark dark:border-b-light outline-none resize-none"
        name="user_message"
        required
      />
      <span>Your mail address:</span>
      <input
        name="user_email"
        required
        type="email"
        className="bg-light dark:bg-dark border-b-2 border-b-black dark:border-b-light outline-none"
      />
      <span>Regards</span>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="bg-primary/75 dark:bg-primaryDark rounded font-semibold text-light dark:text-dark p-4"
      >
        Send
      </motion.button>
    </form>
  );
};

export default ContactForm;
