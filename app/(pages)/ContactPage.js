import AnimateText from "@/components/AnimateText";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <>
      <AnimateText
        text="Contact Me"
        className="mt-20 text-7xl xl:text-6xl lg:text-5xl xs:text-4xl"
      />
      <ContactForm />
    </>
  );
};

export default ContactPage;
