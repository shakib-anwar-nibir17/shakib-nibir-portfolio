import HomePage from "@/app/(pages)/HomePage";
import HireMe from "@/components/HireMe";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-[84vh]">
      <HomePage />
      <HireMe />
      <div className="absolute right-0 bottom-14 inline-block">
        <Image src="/gears.png" height={200} width={400} alt="gears" />
      </div>
    </main>
  );
}
