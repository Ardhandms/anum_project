import Csv from "@/components/pages/Csv";
import Hero1 from "@/components/pages/Hero1";
import Hero2 from "@/components/pages/Hero2";
import Hero4 from "@/components/pages/Hero4";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero1 />
      <Hero2 />
      <Csv />
      <Hero4 />
    </>
  )
}
