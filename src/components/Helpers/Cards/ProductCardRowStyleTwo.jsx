
import Image from "next/image";
import Link from "next/link";
import utils from "../../../utils";
export default function ProductCardRowStyleTwo({ className, datas }) {
  return (
    <div
      data-aos="fade-up"
      className={`product-card-row-two w-full  ${className || ""}`}
    >
      <div className="w-full h-[105px] bg-white border border-primarygray px-5 ">
        <div className="w-full h-full flex space-x-5 justify-center items-center">
          <div className="w-[75px] h-[75px] relative">
            <Image layout='fill'
              src={utils.getFirstImage(datas.list_image)}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 h-full flex flex-col justify-center ">
            <Link href="/single-product">
              <p className="title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-1 hover:text-qyellow cursor-pointer">
                {datas.title}
              </p>
            </Link>

            <p className="price">
              {/*<span className="main-price text-qgray line-through font-600 text-[18px]">*/}
              {/*  {datas.price}*/}
              {/*</span>*/}
              <span className="offer-price text-qred font-600 text-[16px] ml-2">
                {utils.formatMoney(datas.price)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
