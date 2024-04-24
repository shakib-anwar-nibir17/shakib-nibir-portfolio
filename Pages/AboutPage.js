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
        className="my-20 !text-7xl"
      />
      <div className="grid w-full grid-cols-8 gap-16 px-32">
        <AboutMe />
        <ProfileImage />
        <Stats />
      </div>
      <Education />
    </>
  );
};

export default AboutPage;
