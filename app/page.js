import HomePage from "@/app/(pages)/HomePage";
import HireMe from "@/components/HireMe";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-[84vh] px-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 xs:p-4">
      <HomePage />
      <HireMe />
      <div className="absolute right-0 bottom-14 inline-block xl:hidden">
        <Image src="/gears.png" height={200} width={400} alt="gears" />
      </div>
    </main>
  );
}
