import {useEffect, useState} from "react";
import Star from "../Helpers/icons/Star";
import Selectbox from "../Helpers/Selectbox";
import utils from "../../utils";
import {useRouter} from "next/router";
import {filter} from "lodash/collection";
import Image from "next/image";

export default function ProductView({className, reportHandler, product}) {
    console.log(product)
    const productsImg = filter(product.list_image.split(';'), e => !!e).map((e, idx) => ({
        id: idx,
        src: e,
        color: "#FFBC63",
    }));

    const router = useRouter();

    const [src, setSrc] = useState(productsImg[0].src);
    const [url, setUrl] = useState('')
    const [showPhone, setShowPhone] = useState(false);
    const changeImgHandler = (current) => {
        setSrc(current);
    };
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        setQuantity((prev) => prev + 1);
    };
    const decrement = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUrl(window.location.href);
        }
    }, []);

    return (
        <div
            className={`product-view w-full lg:flex justify-between ${
                className || ""
            }`}
        >
            <div data-aos="fade-right" className="lg:w-1/2 xl:mr-[70px] lg:mr-[50px]">
                <div className="w-full">
                    <div
                        className="w-full h-[600px] border border-qgray-border flex justify-center items-center overflow-hidden relative mb-3">
                        <img
                            src={src}
                            alt=""
                            className="object-contain h-full w-full"
                        />
                        {/*<div*/}
                        {/*    className="w-[80px] h-[80px] rounded-full bg-qyellow text-qblack flex justify-center items-center text-xl font-medium absolute left-[30px] top-[30px]">*/}
                        {/*    <span>-50%</span>*/}
                        {/*</div>*/}
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {productsImg &&
                            productsImg.length > 0 &&
                            productsImg.map((img) => (
                                <div
                                    onClick={() => changeImgHandler(img.src)}
                                    key={img.id}
                                    className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer"
                                >
                                    <img
                                        src={img.src}
                                        alt=""
                                        className={`w-full h-full object-contain ${
                                            src !== img.src ? "opacity-50" : ""
                                        } `}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="product-details w-full mt-10 lg:mt-0">
          <span
              data-aos="fade-up"
              className="text-qgray text-xs font-normal uppercase tracking-wider mb-2 inline-block"
          >
            {product.collection}
          </span>
                    <p
                        data-aos="fade-up"
                        className="text-xl font-medium text-qblack mb-4"
                    >
                        {product.title}
                    </p>

                    <div
                        data-aos="fade-up"
                        className="flex space-x-[10px] items-center mb-6"
                    >
                        <div className="flex">
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                        </div>
                        <span className="text-[13px] font-normal text-qblack">
              6 Đánh giá
            </span>
                    </div>

                    <div data-aos="fade-up" className="flex space-x-2 items-center mb-7">
                        {/*<span className="text-sm font-500 text-qgray line-through mt-2">*/}
                        {/*  $9.99*/}
                        {/*</span>*/}
                        <span className="text-2xl font-500 text-qred">{utils.formatMoney(product.price)}</span>
                    </div>

                    <p
                        data-aos="fade-up"
                        className="text-qgray text-sm text-normal mb-[30px] leading-7"
                    >
                        {product.des}
                    </p>

                    <div data-aos="fade-up"
                         className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between mb-[30px]">
                        <div className="flex space-x-2 items-center cursor-pointer">
                            <div>
                                <Image
                                    src={product.avatar ? product.avatar : `/assets/images/user_default.png?v=1`}
                                    alt={'account avatar'}
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className={'font-semibold font-lg'}>{product.contact_name}</div>
                        </div>
                        <div
                            className="bg-[#33a837] inline-flex space-x-1 px-3 py-1 md:py-0 flex rounded items-center cursor-pointer hover:bg-[#3b8122]"
                            onClick={() => showPhone ? utils.copyToMem(product.contact_phone) : setShowPhone(true)}
                        >
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111"
                                        stroke="white" strokeWidth="1.5" strokeLinecap="round"></path>
                                </g>
                            </svg>
                            <div
                                className="text-white w-[120px]">{utils.transformPhone(product.contact_phone, showPhone)}</div>
                            <div
                                className={'text-white flex-1 text-end'}>{showPhone ? 'Bấm để sao chép' : 'Bấm để hiện số'}</div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="flex flex-col mb-[30px]">
                        <div className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">
                            Địa chỉ
                        </div>
                        <div className={'inline-flex space-x-2'}>
                            <svg width="24px" height="24px" viewBox="0 -0.05 26.1 26.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_719" data-name="Group 719" transform="translate(-50 -100)"> <path id="Path_1486" data-name="Path 1486" d="M63,126c-7.2,0-13-1.6-13-3.5,0-1.3,2.6-2.4,6.5-3l1.6,1.7c-3.6.2-5.5.8-5.5,1.3,0,.8,4.3,1.5,10.4,1.5s10.5-.7,10.5-1.5c0-.6-1.9-1.1-5.5-1.3l1.6-1.7c3.9.6,6.5,1.7,6.5,3C76,124.4,70.2,126,63,126Zm4-17a4,4,0,1,1-4-4A4.012,4.012,0,0,1,67,109Zm-6,0a2,2,0,1,0,2-2A2.006,2.006,0,0,0,61,109Zm3,12-1,1-1-1c-.3-.4-6.6-5.8-7.8-10.5-.1-.3-.3-1.4.8-1.5.9-.1,1.1,1,1.1,1,.8,3.5,5.2,6.9,6.9,9,1.8-2.3,7-6.1,7-10,0-4.5-2.6-7-7-7-3.3,0-5.6,1.4-6.5,4,0,0-.4,1.2-1.1,1-.8-.2-.9-.8-.6-1.7A9,9,0,0,1,72,109C72,114,64.4,120.6,64,121Z" fill="#444"></path> </g> </g></svg>
                            <span>{product.city ? `${product.address_more}, ${product.district}, ${product.city}` : ''}</span>
                        </div>

                        <div className={'inline-flex space-x-2 mt-2'}>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C21.4816 18.1752 21.7706 17.3001 21.8985 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M10 16H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14 16H12.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2 10L7 10M22 10L11 10" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                            <span>{product.car_status || product.bicycle_status || product.mobile_status || product.computer_status}</span>
                        </div>
                    </div>

                    <div
                        data-aos="fade-up"
                        className="quantity-card-wrapper w-full flex items-center h-[50px] space-x-[10px] mb-[30px]"
                    >
                        <div className="px-3 h-full flex justify-center items-center border border-qgray-border">
                            <button type="button" className='inline-flex space-x-2'>
                <span>
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M17 1C14.9 1 13.1 2.1 12 3.7C10.9 2.1 9.1 1 7 1C3.7 1 1 3.7 1 7C1 13 12 22 12 22C12 22 23 13 23 7C23 3.7 20.3 1 17 1Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                    />
                  </svg>
                </span>
                                <span>Lưu tin</span>
                            </button>
                        </div>
                        <div className="flex-1 h-full">
                            <button
                                type="button"
                                className="black-btn text-sm font-semibold w-full h-full"
                            >
                                Mua ngay &gt;&gt;
                            </button>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="mb-[20px]">
                        <p className="text-[13px] text-qgray leading-7">
                            <span className="text-qblack">Danh mục :</span> {product.collection}
                        </p>
                        <p className="text-[13px] text-qgray leading-7">
                            <span className="text-qblack">Danh mục con :</span> {product.collection_sub}
                        </p>
                        <p className="text-[13px] text-qgray leading-7">
                            <span className="text-qblack">{product.type} - {product.sell_type}</span>
                        </p>
                    </div>

                    <div
                        data-aos="fade-up"
                        className="flex space-x-2 items-center mb-[20px]"
                    >
            <span>
              <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M0 0C0.247634 0 0.475436 0 0.729172 0C0.738324 0.160174 0.747477 0.316279 0.757647 0.493233C1.05816 0.392044 1.33885 0.282211 1.62818 0.203395C3.11296 -0.201361 4.51385 0.0366111 5.84202 0.779512C6.47661 1.13494 7.14171 1.39071 7.86987 1.47207C8.88125 1.58496 9.82093 1.35817 10.7098 0.88426C10.9335 0.765274 11.1522 0.636627 11.411 0.491199C11.4161 0.606117 11.4237 0.693577 11.4237 0.780529C11.4242 3.18822 11.4222 5.5954 11.4288 8.00309C11.4293 8.1892 11.3718 8.29089 11.2096 8.38039C9.31956 9.42279 7.4285 9.43499 5.54557 8.37734C4.06231 7.54443 2.55363 7.43307 0.992568 8.13835C0.804428 8.22327 0.737816 8.33005 0.739341 8.53904C0.749003 9.9206 0.744426 11.3027 0.744426 12.6842C0.744426 12.7849 0.744426 12.8851 0.744426 13C0.48764 13 0.254244 13 0 13C0 8.67582 0 4.34961 0 0Z"
                    fill="#EB5757"
                />
              </svg>
            </span>

                        <button
                            type="button"
                            onClick={reportHandler}
                            className="text-qred font-semibold text-[13px]"
                        >
                            Báo cáo
                        </button>
                    </div>

                    <div
                        data-aos="fade-up"
                        className="social-share flex  items-center w-full"
                    >
            <span className="text-qblack text-[13px] mr-[17px] inline-block">
              Chia sẻ với
            </span>

                        <div className="flex space-x-5 items-center">
                            {/* facebook*/}
                            <a href={utils.getUrlFacebook(`Sản phẩm {name} trên Raovat24h`, url)}
                               target={'_blank'} rel="noreferrer">
                                <svg
                                    width="10"
                                    height="16"
                                    viewBox="0 0 10 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 16V9H0V6H3V4C3 1.3 4.7 0 7.1 0C8.3 0 9.2 0.1 9.5 0.1V2.9H7.8C6.5 2.9 6.2 3.5 6.2 4.4V6H10L9 9H6.3V16H3Z"
                                        fill="#3E75B2"
                                    />
                                </svg>
                            </a>
                            {/* pinterest*/}
                            {/*<span>*/}
                            {/*  <svg*/}
                            {/*    width="16"*/}
                            {/*    height="16"*/}
                            {/*    viewBox="0 0 16 16"*/}
                            {/*    fill="none"*/}
                            {/*    xmlns="http://www.w3.org/2000/svg"*/}
                            {/*  >*/}
                            {/*    <path*/}
                            {/*      d="M8 0C3.6 0 0 3.6 0 8C0 11.4 2.1 14.3 5.1 15.4C5 14.8 5 13.8 5.1 13.1C5.2 12.5 6 9.1 6 9.1C6 9.1 5.8 8.7 5.8 8C5.8 6.9 6.5 6 7.3 6C8 6 8.3 6.5 8.3 7.1C8.3 7.8 7.9 8.8 7.6 9.8C7.4 10.6 8 11.2 8.8 11.2C10.2 11.2 11.3 9.7 11.3 7.5C11.3 5.6 9.9 4.2 8 4.2C5.7 4.2 4.4 5.9 4.4 7.7C4.4 8.4 4.7 9.1 5 9.5C5 9.7 5 9.8 5 9.9C4.9 10.2 4.8 10.7 4.8 10.8C4.8 10.9 4.7 11 4.5 10.9C3.5 10.4 2.9 9 2.9 7.8C2.9 5.3 4.7 3 8.2 3C11 3 13.1 5 13.1 7.6C13.1 10.4 11.4 12.6 8.9 12.6C8.1 12.6 7.3 12.2 7.1 11.7C7.1 11.7 6.7 13.2 6.6 13.6C6.4 14.3 5.9 15.2 5.6 15.7C6.4 15.9 7.2 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0Z"*/}
                            {/*      fill="#E12828"*/}
                            {/*    />*/}
                            {/*  </svg>*/}
                            {/*</span>*/}
                            {/* tweet*/}
                            <a href={utils.getUrlTweet(`Sản phẩm {name} trên Raovat24h`, url)}
                               target={'_blank'} rel="noreferrer">
                                <svg
                                    width="18"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.0722 1.60052C16.432 1.88505 15.7562 2.06289 15.0448 2.16959C15.7562 1.74278 16.3253 1.06701 16.5742 0.248969C15.8985 0.640206 15.1515 0.924742 14.3335 1.10258C13.6933 0.426804 12.7686 0 11.7727 0C9.85206 0 8.28711 1.56495 8.28711 3.48557C8.28711 3.7701 8.32268 4.01907 8.39382 4.26804C5.51289 4.12577 2.9165 2.73866 1.17371 0.604639C0.889175 1.13814 0.71134 1.70722 0.71134 2.34742C0.71134 3.5567 1.31598 4.62371 2.27629 5.26392C1.70722 5.22835 1.17371 5.08608 0.675773 4.83711V4.87268C0.675773 6.5799 1.88505 8.00258 3.48557 8.32268C3.20103 8.39382 2.88093 8.42938 2.56082 8.42938C2.34742 8.42938 2.09845 8.39382 1.88505 8.35825C2.34742 9.74536 3.62784 10.7768 5.15722 10.7768C3.94794 11.7015 2.45412 12.2706 0.818041 12.2706C0.533505 12.2706 0.248969 12.2706 0 12.2351C1.56495 13.2309 3.37887 13.8 5.37062 13.8C11.8082 13.8 15.3294 8.46495 15.3294 3.84124C15.3294 3.69897 15.3294 3.52113 15.3294 3.37887C16.0052 2.9165 16.6098 2.31186 17.0722 1.60052Z"
                                        fill="#3FD1FF"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}