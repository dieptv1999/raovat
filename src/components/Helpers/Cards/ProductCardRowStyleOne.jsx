import Compair from "../icons/Compair";
import QuickViewIco from "../icons/QuickViewIco";
import Star from "../icons/Star";
import ThinLove from "../icons/ThinLove";
import Link from "next/link";
import utils from "../../../utils";
import ThinLoveFill from "../icons/ThinLoveFill";
import {useState} from "react";
import ApiFactory from "../../../apis/ApiFactory";
import useLikePost from "../../../../hooks/useLikePost";

export default function ProductCardRowStyleTwo({
                                                   className, datas, type,
                                                   authenticated = false,
                                                   onLogin = () => {
                                                   },
                                               }) {
    const {liked, onLike} = useLikePost({postId: datas.id});

    async function addFollow() {
        if (authenticated) {
            await onLike()
        } else {
            onLogin();
        }
    }

    return (
        <div
            data-aos="fade-left"
            className={`product-row-card-style-one w-full h-[250px] bg-white group relative overflow-hidden ${
                className || ""
            }`}
        >
            <div className="flex space-x-5 items-center w-full h-full lg:p-[30px] sm:p-5 p-2">
                <div className="lg:w-1/2 w-1/3 h-full">
                    <img
                        src={utils.getFirstImage(datas.list_image)}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 flex flex-col justify-center h-full">
                    <div>
                        {/* reviews */}
                        <div className="flex space-x-1 mb-3">
                            {Array.from(Array(datas.review), () => (
                                <span key={datas.review + Math.random()}>
                  <Star/>
                </span>
                            ))}
                        </div>
                        <Link href="/single-product">
                            <p className="title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-qyellow cursor-pointer">
                                {datas.title}
                            </p>
                        </Link>
                        <Link href={`/account/${datas.user_id}`}>
                            <div className="pl-2 text-blue-500 text-xs cursor-pointer inline-flex items-center">
                                <svg fill="rgb(59 130 246)" height="12px" width="12px" version="1.1" id="Capa_1"
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 495.554 495.554"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <g id="XMLID_115_"> <g id="XMLID_116_"> <path
                                        id="XMLID_117_"
                                        d="M353.732,451.163c3.388,10.912-2.324,22.536-13.024,26.545c-35.256,13.208-68.455,17.846-111.453,17.846 c-118.188,0-222.136-84.711-222.136-224.283C7.118,126.042,112.492,0,273.4,0c125.316,0,215.036,86.156,215.036,205.784 c0,103.949-58.388,169.434-135.282,169.434c-33.456,0-57.69-17.076-61.225-54.813h-1.423 c-22.095,36.324-54.124,54.813-91.861,54.813c-46.298,0-79.753-34.171-79.753-92.557c0-86.842,64.092-165.898,166.625-165.898 c17.074,0,35.438,2.328,51.491,6.064c19.1,4.444,31.434,22.886,28.295,42.243l-16.411,101.212 c-7.14,42.037-2.152,61.253,17.79,61.949c30.619,0.728,69.051-38.442,69.051-120.326c0-92.557-59.801-164.484-170.16-164.484 c-108.937,0-204.36,85.459-204.36,221.447c0,118.902,76.209,186.558,182.278,186.558c28.226,0,57.728-4.744,82.85-13.864 c5.426-1.969,11.42-1.629,16.591,0.935c5.171,2.565,9.08,7.133,10.792,12.646L353.732,451.163z M296.189,175.873 c-5.686-1.423-12.815-2.847-22.064-2.847c-47.017,0-84.035,46.27-84.035,101.11c0,27.053,12.117,44.117,35.594,44.117 c26.346,0,54.125-33.443,60.527-74.754L296.189,175.873z"></path> </g> </g> </g></svg>
                                <span className="ml-0.5">{datas.contact_name}</span>
                            </div>
                        </Link>
                        <p className="price mb-[26px]">
                            {/*<span className="main-price text-qgray line-through font-600 sm:text-[18px] text-base">*/}
                            {/*  {datas.price}*/}
                            {/*</span>*/}
                            <span className="offer-price text-qred font-600 sm:text-[16px] text-base ml-2">
                {utils.formatMoney(datas.price)}
              </span>
                        </p>
                        <button type="button" className="w-[160px] h-[30px]">
                            <span className={type === 3 ? 'blue-btn' : 'yellow-btn'}> Xem tin &gt;&gt;</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* quick-access-btns */}
            <div
                className="quick-access-btns flex flex-col space-y-2 absolute right-4 -right-10 top-[30px]  transition-all duration-300 ease-in-out">
                <Link href={"/single-product"} passHref>
                    <a>
          <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
            <QuickViewIco/>
          </span>
                    </a>
                </Link>
                <div className="cursor-pointer" onClick={addFollow}>
          <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
            {liked ? <ThinLoveFill/> : <ThinLove/>}
          </span>
                </div>
                <a href="#">
          <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
            <Compair/>
          </span>
                </a>
            </div>
        </div>
    );
}