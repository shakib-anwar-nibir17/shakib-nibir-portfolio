import HomePage from "@/Pages/HomePage";
import HireMe from "@/components/HireMe";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-light w-full">
      <HomePage />
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block">
        <Image src="/gears.png" height={200} width={500} alt="gears" />
      </div>
    </main>
  );
}
