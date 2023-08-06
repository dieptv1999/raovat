import React, { FC } from "react";
import Link from "next/link";
import { StaticImageData } from "next/image";
import NcImage from '../NcImage/NcImage';

const CardCategory1 = ({
  className = "",
  size = "normal",
  name = "",
  desc = "",
  featuredImage = "",
}) => {
  return (
    <Link
      href={"/collection"}
      className={`nc-CardCategory1 flex items-center ${className}`}
    >
      <NcImage
        alt=""
        containerClassName={`flex-shrink-0 relative ${
          size === "large" ? "w-20 h-20" : "w-12 h-12"
        } rounded-lg mr-4 overflow-hidden`}
        src={featuredImage}
        sizes="(max-width: 640px) 100vw, 40vw"
        fill
      />
      <div>
        <h2
          className={`${
            size === "large" ? "text-lg" : "text-base"
          } nc-card-title text-neutral-900 dark:text-neutral-100 font-semibold`}
        >
          {name}
        </h2>
        <span
          className={`${
            size === "large" ? "text-sm" : "text-xs"
          } block mt-[2px] text-neutral-500 dark:text-neutral-400`}
        >
          {desc}
        </span>
      </div>
    </Link>
  );
};

export default CardCategory1;
