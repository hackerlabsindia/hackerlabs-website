"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  bulletPoints: string[];
  link: string;

  img: StaticImageData;
}

const ProjectCards = ({
  title,
  description,
  bulletPoints,
  img,
  link,
}: ProjectCardProps) => {
  return (
    <div className="projectContainer">
      <div>
        <h3 className="font-bold text-2xl font-inter py-3 sm:pl-5 opacity-100 relative m-auto flex w-full  gap-0 sm:text-4xl  md:text-3xl lg:text-6xl text-start">
          <Link
            className="border-b-2 hover:border-black font-bold  border-transparent relative transition-all duration-300 "
            href={link}
          >
            {title}
          </Link>
        </h3>

        <p className="font-inter py-2  opacity-100 relative m-auto flex w-full justify-between  text-sm text-13px md:text-xl lg:text-2xl text-start sm:text-xl">
          {description}
        </p>
        {bulletPoints.map((point, key) => (
          <p
            className="font-inter py-2  opacity-100 relative m-auto flex w-full justify-between  text-start text-sm"
            key={key}
          >
            {point}
          </p>
        ))}
      </div>

      {img && (
        <Image
          src={img}
          alt="projectImages"
          width={500}
          height={30}
          className="relative m-auto w-full justify-between md:px-12 "
        />
      )}
    </div>
  );
};

export default ProjectCards;
