import AnimateText from "@/components/AnimateText";
import BoxIcon from "@/components/BoxIcon";
import { skills } from "@/database/Skills";

const SkillPage = () => {
  const skillArray = skills;
  return (
    <>
      <AnimateText
        text="Skills and Technology"
        className="my-20 lg:my-14 md:my-8 text-7xl xl:text-6xl lg:text-4xl sm:text-2xl"
      />
      <div className="grid w-full grid-cols-8 xl:grid-cols-6 md:grid-cols-4  xs:grid-cols-2 gap-10 mb-10">
        {skillArray.map((skill, id) => (
          <BoxIcon key={id} image={skill.image} name={skill.name} />
        ))}
      </div>
    </>
  );
};

export default SkillPage;
