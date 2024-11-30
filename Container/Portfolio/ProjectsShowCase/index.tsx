"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  bulletPoints: string[];
  androidLink: string;
  androidLinkName: string;
  img: StaticImageData;
  iosLink: string;
  iosLinkName?: string;
  highlight: boolean;
}

const ProjectCards = ({
  title,
  description,
  bulletPoints,
  img,
  androidLink,
  androidLinkName,
  iosLink,
  iosLinkName,
  highlight = false,
}: ProjectCardProps) => {
  return (
    <div className="projectContainer">
      <div>
        <h3 className="font-bold text-2xl font-inter py-3 sm:pl-5 opacity-100 relative m-auto flex w-full  gap-0 sm:text-4xl  md:text-3xl lg:text-6xl text-start flex-1">
          {title}
        </h3>

        <Link className="link " href={androidLink}>
          {androidLinkName}
        </Link>
        {highlight && (
          <Link className="link" href={iosLink}>
            {iosLinkName}
          </Link>
        )}

        <p className="font-inter py-2  opacity-100 relative m-auto flex w-full justify-between  text-sm text-13px md:text-xl lg:text-2xl text-start sm:text-xl flex-1">
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
        <div className="imgContainer">
          <Image src={img} alt="projectImages" layout="responsive" />
        </div>
      )}
    </div>
  );
};

export default ProjectCards;
