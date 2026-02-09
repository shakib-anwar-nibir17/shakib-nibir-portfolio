import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const FeaturedProject = ({
  id,
  type,
  title,
  summary,
  img,
  link,
  github = "",
  github_server = "",
}) => {
  return (
    <article
      className="w-full flex flex-row lg:flex-col items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light
    shadow-2xl p-12 lg:p-6 my-10 dark:bg-dark"
    >
      <Link
        href={`/projects/${id}`}
        className="w-1/2 lg:w-3/4 md:w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto mb-10 transition-all duration-300 hover:scale-105" />
      </Link>
      <div className="w-1/2 lg:w-full flex flex-col items-start justify-between ml-6 sm:ml-0">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={`/projects/${id}`}
          className="hover:underline hover:underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl sm:text-xl dark:text-light font-bold">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light text-justify">
          {summary}
        </p>
        <div className="mt-2 flex flex-wrap gap-4 items-center">
          <Link
            href={github}
            target="_blank"
            className="flex text-xl font-medium items-center gap-1 dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors"
          >
            <SiGithub className="text-2xl" />
            <span className="text-base">Client</span>
          </Link>
          <Link
            href={github_server}
            target="_blank"
            className="flex text-xl font-medium items-center gap-1 dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors"
          >
            <SiGithub className="text-2xl" />
            <span className="text-base">Server</span>
          </Link>
          <Link
            href={`/projects/${id}`}
            className="rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 sm:px-4 text-lg font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border border-transparent hover:border-dark dark:hover:border-light transition-all"
          >
            View Details
          </Link>
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline underline-offset-4 dark:text-light hover:text-primary transition-colors"
          >
            Live Site
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
