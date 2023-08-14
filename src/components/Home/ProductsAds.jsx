import Image from "next/image";
import Link from "next/link";
export default function ProductsAds({
  className,
  ads = [],
  sectionHeight,
}) {
  console.log(ads)
  return (
    <div className={`w-full ${className || ""}`}>
      <div className="container-x mx-auto">
        <div
          className={`${sectionHeight} ${
            ads.length > 1
              ? "sm:flex xl:space-x-[30px] sm:space-x-5"
              : ""
          } items-center w-full  overflow-hidden`}
        >
          <div
            data-aos="fade-right"
            className={`h-full sm:mb-0 mb-5 relative ${
              ads.length > 1 ? "sm:w-1/2 w-full" : "w-full"
            }  `}
          >
            <Link href={ads[0].link ?? '/single-product'} passHref>
              <a target={'_blank'}>
                <Image
                  layout="fill"
                  objectFit="none"
                  src={ads[0].cover}
                  alt=""
                  className="w-full sm:h-full h-auto"
                />
              </a>
            </Link>
          </div>
          {ads.length > 1 && (
            <div data-aos="fade-left" className="relative flex-1 h-full">
              <Link href={ads[1].link ?? '/single-product'} passHref>
                <a target={'_blank'}>
                  <Image
                    layout="fill"
                    objectFit="none"
                    src={ads[1].cover}
                    alt=""
                    className="w-full h-full"
                  />
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
