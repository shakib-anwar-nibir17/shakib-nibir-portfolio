import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const FeaturedProject = ({
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
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light
    shadow-2xl p-12 my-10 dark:bg-dark"
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline hover:underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl dark:text-light font-bold">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light text-justify">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="flex text-xl font-medium items-center gap-1 dark:text-light"
          >
            <SiGithub className="text-2xl" />
            <span>Client Repo</span>
          </Link>
          <Link
            href={github_server}
            target="_blank"
            className="flex text-xl font-medium items-center gap-1 ml-4 dark:text-light"
          >
            <SiGithub className="text-2xl " />
            <span>Server Repo</span>
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
