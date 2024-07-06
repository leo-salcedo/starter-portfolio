"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left Column */}
        <div className="col-span-5 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-6xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hey, I&apos;m{" "}
            </span>
            <br />
            {/* Container for Animation */}
            <div
              style={{
                display: "inline-block",
                position: "relative",
                minHeight: "1.5em",
              }}
            >
              <TypeAnimation
                sequence={[
                  "Leo.",
                  1500,
                  "eager to learn.",
                  1500,
                  "an aspiring SWE.",
                  1500,
                  "curious about CS.",
                  1500,
                ]}
                wrapper="span"
                speed={25}
                repeat={Infinity}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  whiteSpace: "nowrap",
                }}
              />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl font-bold italic">
            Student. Programmer. Hooper.
          </p>
          <div>
            <button className="px-8 py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white text-lg">
              Hire Me
            </button>
            <button className="px-2 py-2 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white ml-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-3 text-lg">
                Download Resume
              </span>
            </button>
          </div>
        </div>
        {/* Right Column */}
        <div className="col-span-7 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
