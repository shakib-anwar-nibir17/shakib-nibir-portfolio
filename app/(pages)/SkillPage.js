import AnimateText from "@/components/AnimateText";
import BoxIcon from "@/components/BoxIcon";
import { skills } from "@/database/Skills";

const SkillPage = () => {
  const skillArray = skills;
  return (
    <>
      <AnimateText text="Skills and Technology" className="my-20 text-7xl" />
      <div className="grid w-full grid-cols-8 gap-10 px-32">
        {skillArray.map((skill, id) => (
          <BoxIcon key={id} image={skill.image} name={skill.name} />
        ))}
      </div>
    </>
  );
};

export default SkillPage;
