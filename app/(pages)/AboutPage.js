import AboutMe from "@/components/AboutMe";
import AnimateText from "@/components/AnimateText";
import Education from "@/components/Education";
import ProfileImage from "@/components/ProfileImage";
import Stats from "@/components/Stats";

const AboutPage = () => {
  return (
    <>
      <AnimateText
        text="Passion lights the path to purpose"
        className="my-20 lg:my-12 md:my-8 text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl"
      />
      <div className="grid w-full grid-cols-8 gap-16 lg:gap-12 md:gap-8">
        <AboutMe />
        <ProfileImage />
        <Stats />
      </div>
      <Education />
    </>
  );
};

export default AboutPage;
