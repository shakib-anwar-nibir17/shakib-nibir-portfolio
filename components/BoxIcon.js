import Image from "next/image";

const BoxIcon = ({ name, image }) => {
  return (
    <div className="relative rounded-2xl border-2 border-solid border-dark bg-light p-8 flex justify-center items-center">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark hover:cursor-pointer" />
      <Image
        src={image}
        height={300}
        width={200}
        alt={name}
        className="w-full rounded 2xl"
      />
    </div>
  );
};

export default BoxIcon;
