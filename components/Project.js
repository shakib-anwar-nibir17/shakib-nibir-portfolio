import Image from "next/image";
import Link from "next/link";

const Project = ({
  type,
  title,
  img,
  link,
  github = "",
  github_server = "",
}) => {
  return (
    <article className="w-full flex items-center justify-center gap-10 rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline hover:underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center gap-3 text-lg font-semibold">
          <Link href={github} target="_blank">
            Client
          </Link>
          <Link href={github_server} target="_blank">
            Server
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 text-lg font-semibold"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
