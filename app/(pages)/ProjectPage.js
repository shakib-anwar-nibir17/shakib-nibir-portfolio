import AnimateText from "@/components/AnimateText";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";
import { projects } from "@/database/Projects";

const ProjectPage = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <>
      <AnimateText
        text="My Projects"
        className="text-6xl lg:text-5xl sm:text-4xl mt-20 mb-16"
      />
      <div className="grid w-full grid-cols-1 gap-24">
        {featuredProjects.map((project) => (
          <div key={project.id}>
            <FeaturedProject
              id={project.slug}
              img={project.img}
              title={project.title}
              type={project.type}
              summary={project.summary}
              link={project.link}
              github={project.github}
              github_server={project.github_server}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-12 mt-10 xs:gap-2 md:gap-8 lg:gap-6 gap-10">
        {regularProjects.map((project) => (
          <div key={project.id} className="col-span-4 md:col-span-6 sm:col-span-12">
            <Project
              id={project.slug}
              type={project.type}
              img={project.img}
              title={project.title}
              link={project.link}
              github={project.github}
              github_server={project.github_server}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
