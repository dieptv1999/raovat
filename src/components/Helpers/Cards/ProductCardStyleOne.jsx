import Compair from "../icons/Compair";
import QuickViewIco from "../icons/QuickViewIco";
import Star from "../icons/Star";
import ThinLove from "../icons/ThinLove";
import Link from "next/link";
import utils from "../../../utils";
import ApiFactory from "../../../apis/ApiFactory";
import {useState} from "react";
import ThinLoveFill from "../icons/ThinLoveFill";
import useLikePost from "../../../../hooks/useLikePost";

export default function ProductCardStyleOne({
                                                datas, type,
                                                authenticated = false,
                                                onLogin = () => {
                                                },
                                            }) {
    const {liked, onLike} = useLikePost({postId: datas.id});
    const available =
        (datas.cam_product_sale /
            (datas.cam_product_available + datas.cam_product_sale)) *
        100;

    async function addFollow() {
        if (authenticated) {
            onLike()
        } else {
            onLogin();
        }
    }

    return (
        <div
            className="product-card-one w-full h-full bg-white relative group overflow-hidden flex flex-col"
            style={{boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)"}}
        >
            <div
                className="product-card-img w-full h-[300px]"
                style={{
                    background: `url(${utils.getFirstImage(datas.list_image)}) no-repeat center`,
                }}
            >
                {/* product available progress */}
                {datas.campaingn_product && (
                    <>
                        <div className="px-[30px] absolute left-0 top-3 w-full">
                            <div className="progress-title flex justify-between ">
                                <p className="text-xs text-qblack font-400 leading-6">
                                    Products Available
                                </p>
                                <span className="text-sm text-qblack font-600 leading-6">
                  {datas.cam_product_available}
                </span>
                            </div>
                            <div
                                className="progress w-full h-[5px] rounded-[22px] bg-primarygray relative overflow-hidden">
                                <div
                                    style={{
                                        width: `${datas.campaingn_product ? 100 - available : 0}%`,
                                    }}
                                    className={`h-full absolute left-0 top-0  ${type === 3 ? 'bg-qh3-blue' : 'bg-qyellow'}`}
                                ></div>
                            </div>
                        </div>
                    </>
                )}
                {/* product type */}
                {datas.product_type && !datas.campaingn_product && (
                    <div className="product-type absolute right-[14px] top-[17px]">
            <span
                className={`text-[9px] font-700 leading-none py-[6px] px-3 uppercase text-white rounded-full tracking-wider ${
                    datas.product_type === "popular" ? "bg-[#19CC40]" : "bg-qyellow"
                }`}
            >
              {datas.product_type}
            </span>
                    </div>
                )}
            </div>
            <div className="product-card-details px-[18px] pb-[30px] relative flex flex-col flex-1">
                {/* add to card button */}
                <div
                    className="absolute w-full h-10 left-0 bottom-[-85px] group-hover:bottom-[0px] transition-all duration-300 ease-in-out">
                    <button type="button" className={type === 3 ? 'blue-btn' : 'yellow-btn'}>
                        <div className="flex items-center space-x-3">
              <span>
                <span>
                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 442.04 442.04"
                     xmlSpace="preserve" stroke="#000000" strokeWidth="0.0044204000000000005"><g
                    id="SVGRepo_bgCarrier"></g><g
                    id="SVGRepo_tracerCarrier"></g><g
                    id="SVGRepo_iconCarrier"> <g> <g> <path
                    d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203 c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219 c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367 c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021 c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212 c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071 c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"></path> </g> <g> <path
                    d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188 c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993 c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5 s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"></path> </g> <g> <path
                    d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"></path> </g> </g> </g></svg>
              </span>
              </span>
                            <span>Xem tin &gt;&gt;</span>
                        </div>
                    </button>
                </div>
                {/*<div className="reviews flex space-x-[1px] mb-3">*/}
                {/*  {Array.from(Array(datas.review), () => (*/}
                {/*    <span key={datas.review + Math.random()}>*/}
                {/*      <Star />*/}
                {/*    </span>*/}
                {/*  ))}*/}
                {/*</div>*/}
                <Link href="/single-product">
                    <p className="title text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-qyellow cursor-pointer mt-2">
                        {datas.title}
                    </p>
                </Link>
                <div className="price mb-1 flex-1">
                    {/*<span className="main-price text-qgray line-through font-600 text-[16px]">*/}
                    {/*  {utils.formatMoney(datas.price)}*/}
                    {/*</span>*/}
                    <span className="offer-price text-qred font-600 text-[16px] mr-2">
            {utils.formatMoney(datas.price)}
          </span>
                </div>
                <div className="text-xs">
                    {utils.convertIntToStringLocale(new Date().getTime() - new Date(datas.create_dt).getTime())}
                    <span className="mx-0.5">-</span>
                    <span>{datas.city}, {datas.district}</span>
                </div>
            </div>
            {/* quick-access-btns */}
            <div
                className="quick-access-btns flex flex-col space-y-2 absolute right-4 -right-10 top-20  transition-all duration-300 ease-in-out">
                <Link href={"/single-product"} passHref>
                    <a>
          <span className="w-10 h-10 flex justify-center items-center bg-primarygray rounded">
            <QuickViewIco/>
          </span>
                    </a>
                </Link>
                <div onClick={addFollow} className="cursor-pointer">
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
