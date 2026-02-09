import Image from "next/image";
import Link from "next/link";

const Project = ({
  id,
  type,
  title,
  img,
  link,
  github = "",
  github_server = "",
}) => {
  return (
    <article className="w-full flex flex-row lg:flex-col items-center justify-center gap-10 rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light dark:text-light">
      <Link
        href={`/projects/${id}`}
        className="w-full cursor-pointer overflow-hidden rounded-lg group"
      >
        <Image src={img} alt={title} className="w-full h-auto transition-transform duration-300 group-hover:scale-105" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={`/projects/${id}`}
          className="hover:underline hover:underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-lg font-semibold">
          <Link href={github} target="_blank" className="hover:text-primary transition-colors">
            Client
          </Link>
          <Link href={github_server} target="_blank" className="hover:text-primary transition-colors">
            Server
          </Link>
          <Link
             href={`/projects/${id}`}
             className="ml-auto underline underline-offset-4 text-base font-medium hover:text-primary transition-colors"
          >
             Details
          </Link>
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-1 px-4 text-sm font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border border-transparent hover:border-dark dark:hover:border-light transition-all"
          >
            Live
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
