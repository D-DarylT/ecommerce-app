"use client";

// import Image from "next/image"; // Removed. Use <img> tag instead.
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { BackgroundBeams } from "../components/ui/background-beams";

const HeroSectionDemo1 = () => {
  return (
    <>
      <Navbar />
      <section className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-black">
        <BackgroundBeams className="absolute inset-0 -z-10" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-24">
        <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-6">
          Power the Future. Empower Your World.
        </h1>
        <p className="text-center text-lg md:text-2xl text-neutral-300 max-w-2xl mb-10">
          Welcome to Voltora, where the energy of tomorrow is available today. We are your premier partner for cutting-edge industrial power stations, high-efficiency solar arrays, and intelligent energy storage systems. We don&#39;t just sell products; we deliver resilient, sustainable, and intelligent energy ecosystems tailored for a brighter, more independent future. Explore our solutions and join the energy revolution.
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <HoverBorderGradient
            className="text-lg font-semibold px-8 py-3"
            as="a"
            {...{ href: "/products" }}
          >
            Explore Our Solutions
          </HoverBorderGradient>
          <HoverBorderGradient
            className="text-lg font-semibold px-8 py-3"
            as="a"
            {...{ href: "/contact" }}
          >
            Schedule a Consultation
          </HoverBorderGradient>
        </div>
        <div className="mt-16 w-full max-w-3xl rounded-3xl border border-neutral-800 bg-neutral-900/80 p-4 shadow-2xl backdrop-blur-lg">
            <img
            src="https://assets.aceternity.com/pro/aceternity-landing.webp"
            alt="Landing page preview"
            className="aspect-[16/9] h-auto w-full object-cover rounded-xl border border-neutral-800"
            height={1000}
            width={1000}
          />
        </div>
      </div>
    </section>
    </>
  );
}

export default HeroSectionDemo1;

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">Voltora</h1>
      </div>
      <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        Login
      </button>
    </nav>
  );
};

// Use Navbar at the top of the HeroSectionDemo1 component
