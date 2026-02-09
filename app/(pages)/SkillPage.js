"use client";
import AnimateText from "@/components/AnimateText";
import BoxIcon from "@/components/BoxIcon";
import { skills } from "@/database/Skills";
import { motion } from "framer-motion";

const SkillPage = () => {
  const categories = [
    {
      title: "Frontend Mastery",
      skills: skills.filter((s) =>
        ["html", "css", "javascript", "react", "nextjs", "tailwind-css", "daisyUi", "react-router"].includes(s.name)
      ),
    },
    {
      title: "Backend & Cloud",
      skills: skills.filter((s) =>
        ["nodejs", "express", "mongodb", "Firebase"].includes(s.name)
      ),
    },
    {
      title: "Dev Tools & Services",
      skills: skills.filter((s) =>
        ["Github", "Postman", "react-query", "vercel", "clerk"].includes(s.name)
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="pb-20">
      <AnimateText
        text="Technical Arsenal"
        className="my-20 lg:my-14 md:my-8 text-7xl xl:text-6xl lg:text-5xl xs:text-4xl text-center"
      />
      
      <div className="space-y-16">
        {categories.map((category, idx) => (
          <div key={idx} className="w-full">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 flex items-center gap-4 dark:text-light/80 text-dark/80"
            >
              <span className="h-px w-8 bg-primaryDark dark:bg-primary" />
              {category.title}
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid w-full grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6"
            >
              {category.skills.map((skill) => (
                <motion.div key={skill.id} variants={itemVariants}>
                  <BoxIcon image={skill.image} name={skill.name} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;
