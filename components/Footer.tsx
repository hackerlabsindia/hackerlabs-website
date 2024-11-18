import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="relative flex min-h-[20rem] justify-center overflow-hidden bg-black md:min-h-[30rem]">
      <div className="absolute -bottom-[10rem] left-0 hidden select-none text-[20rem] text-white opacity-15 sm:flex no-transform">
        HackerLabs
      </div>
      <div className="relative flex w-full max-w-[86rem] py-12">
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-gray-800 to-gray-600"></div>
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-gray-800 to-gray-600"></div>
        <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-gray-800 to-gray-600"></div>
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-gray-800 to-gray-600"></div>
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-gray-800 to-gray-600"></div>
        <div className="relative flex flex-col items-center justify-center gap-10 px-6 text-white sm:flex-row sm:px-0">
          <div className="flex select-none gap-2 text-3xl">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/hackerlabs.logo.png"
                alt="logo"
                width="30"
                height="30"
              />
            </div>
            Hacker Labs
          </div>
          <div className="flex gap-5 text-gray-300">
            <a
              href="https://www.youtube.com/?app=desktop"
              target="_blank"
              className="hover:text-blue-400"
            >
              YouTube
            </a>
            <a href="/" target="_blank" className="hover:text-blue-400">
              Intellisay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
