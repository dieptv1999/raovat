import React, {FC} from "react";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import NcImage from "../NcImage/NcImage";

const CardCategory6 = ({
                         className = "",
                         featuredImage = ".",
                         bgSVG = "",
                         name,
                         desc,
                         color = "bg-rose-50",
                       }) => {
  return (
    <div
      className={`nc-CardCategory6 relative w-full aspect-w-1 aspect-h-1 h-0 rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 group hover:nc-shadow-lg transition-shadow ${className}`}
    >
      <div>
        <div className="absolute bottom-0 right-0 top-0 opacity-10">
          <Image src={bgSVG} alt=""/>
        </div>

        <div className="absolute inset-5 flex flex-col justify-between items-center">
          <div className="flex justify-center items-center">
            <NcImage
              alt=""
              src={featuredImage}
              containerClassName={`w-20 h-20 rounded-full overflow-hidden z-0 ${color}`}
            />
          </div>

          <div className="text-center">
            <span
              className={`block mb-1 text-sm text-slate-500 dark:text-slate-400`}
            >
              {desc}
            </span>
            <h2 className={`text-lg sm:text-xl font-semibold`}>{name}</h2>
          </div>

          <Link
            href={"/collection"}
            className="flex items-center text-sm font-medium group-hover:text-primary-500 transition-colors"
          >
            <span>See Collection</span>
            <div>
                            <span>
                              <svg
                                className="fill-current"
                                width="6"
                                height="9"
                                viewBox="0 0 6 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="1.49805"
                                  y="0.818359"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"
                                />
                                <rect
                                  x="5.58984"
                                  y="4.90918"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"
                                />
                              </svg>
                            </span>
            </div>
          </Link>
        </div>
      </div>

      <Link href={"/collection"}></Link>
    </div>
  );
};

export default CardCategory6;
