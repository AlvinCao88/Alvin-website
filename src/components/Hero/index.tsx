"use client";
import PFP from "@/assets/pfp.jpg";
import Image from "next/image";
import SpinningCube from "@/components/SpinningCube";

export default function Hero() {
  return (
<div id='home' className="flex flex-col w-full md:flex-row flex-nowrap h-auto justify-between overflow-hidden">
  <div className="w-full md:w-1/2 sm:pb-4">
    {/* <div className="font-lora text-5xl md:text-6xl font-[1000] transition-colors duration-300 hover:text-red-500"> */}
{/* <div className="font-lora text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"> */}
<div className="font-lora text-5xl md:text-6xl font-extrabold text-primary transition-all duration-300 hover:bg-gradient-to-r hover:from-secondary hover:to-accent hover:bg-clip-text hover:text-transparent">
  &lt;Alvin Cao/&gt;
</div>

    <div className="mt-4 text-lg">I develop software</div>
    <div className="flex items-center text-lg border-2 border-accent border-l-0 rounded-r-full shadow-inner w-fit p-2 mt-4">
      Located in Toronto
      <SpinningCube />
    </div>
  </div>

<div className="flex flex-row flex-nowrap gap-2.5 h-auto justify-center overflow-hidden w-3/5">
  <div className="flex flex-col items-center justify-center gap-2.5 h-full w-3/4 rounded-3xl p-4 bg-secondary">
    <Image src={PFP} alt="pfp" className="w-full h-auto rounded-xl mx-auto " priority={false} />
    <div className="text-2xl p-2">Software Developer</div>
  </div>
</div>

</div>

  );
}
