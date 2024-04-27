import Image from "next/image";
import Profile from "../public/profile.jpg";

const ProfileImage = () => {
  return (
    <div className="col-span-3 xl:col-span-4 lg:col-span-8 relative h-max  rounded-2xl border-2 border-solid border-dark dark:border-light dark:bg-dark bg-light p-8 md:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
      <Image
        src={Profile}
        alt="profile"
        priority
        className="w-full h-auto rounded 2xl"
      />
    </div>
  );
};

export default ProfileImage;
