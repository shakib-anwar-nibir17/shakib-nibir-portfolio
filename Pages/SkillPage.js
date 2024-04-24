import AnimateText from "@/components/AnimateText";
import BoxIcon from "@/components/BoxIcon";
import { skills } from "@/database/Skills";

const SkillPage = () => {
  const skillArray = skills;
  console.log(skillArray);
  return (
    <>
      <AnimateText text="Skills and Technology" className="my-20 !text-7xl" />
      <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-16 px-32">
        {skillArray.map((skill, id) => (
          <BoxIcon key={id} image={skill.image} name={skill.name} />
        ))}
      </div>
    </>
  );
};

export default SkillPage;
