import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light dark:bg-dark bg-light p-8">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
      <Image
        src="/profile.jpg"
        height={500}
        width={500}
        alt="profile"
        className="w-full h-auto rounded 2xl"
      />
    </div>
  );
};

export default ProfileImage;
