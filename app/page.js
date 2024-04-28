import HomePage from "@/app/(pages)/HomePage";
import HireMe from "@/components/HireMe";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-[84vh] px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-4">
      <HomePage />
      <HireMe />
      <div className="absolute right-0 bottom-14 inline-block xl:hidden">
        <Image src="/gears.png" height={200} width={400} alt="gears" />
      </div>
    </main>
  );
}
