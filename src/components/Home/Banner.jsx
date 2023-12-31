import Link from "next/link";
import ProductApi from "../../apis/ProductApi";
import ApiFactory from "../../apis/ApiFactory";

export default function Banner({className, data}) {

    function clickBanner(id) {
        ApiFactory.getRequest("ProductApi").clickBanner({
            user_id: '', // nếu k có thì để  với ng dùng chưa login
            ads_id: id, // id ở API số 1
        })
    }

    return (
        <>
            <div className={`w-full ${className || ""}`}>
                <div className="container-x mx-auto">
                    <div className="main-wrapper w-full">
                        <div className="banner-card lg:flex lg:space-x-[30px] lg:h-[550px] xl:h-[600px]  mb-[30px]">
                            <div data-aos="fade-right" className="lg:w-[640px] xl:w-[740px] w-full h-full">
                                <Link href={data[0]?.link} passHref>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <div className="h-full relative">
                                            <picture onClick={() => clickBanner(data[0].id)}>
                                                <source
                                                    media="(min-width:1025px)"
                                                    width={740}
                                                    height={600}
                                                    placeholder={'blur'}
                                                    className="object-cover"
                                                    // srcSet={`/assets/images/banner-1.png?v=1`}
                                                    srcSet={data[0]?.cover}
                                                />
                                                <img
                                                    src={data[0]?.cover}
                                                    alt=""
                                                    className="w-full max-w-full h-full object-cover"
                                                />
                                            </picture>
                                            {/*<div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-500/[.8] to-pink-50/[.01]*/}
                                            {/*flex items-end text-xl lg:text-3xl font-medium text-white tracking-tight px-8 py-6">*/}
                                            {/*    {data[0]?.title}*/}
                                            {/*</div>*/}
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div
                                data-aos="fade-left"
                                className="flex-1 flex lg:flex-col flex-row  lg:space-y-[30px] h-full"
                            >
                                <div className="w-full lg:h-1/2">
                                    <Link href={data[1]?.link} passHref>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <img
                                                onClick={() => clickBanner(data[1].id)}
                                                // src={`/assets/images/banner-2.png`}
                                                src={data[1]?.cover}
                                                alt="banner 2"
                                                className="w-full h-full object-cover"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="w-full lg:h-1/2">
                                    <Link href={data[2]?.link} passHref>
                                        <a target="_blank" rel="noopener noreferrer">
                                            <img
                                                onClick={() => clickBanner(data[2].id)}
                                                // src={`/assets/images/banner-3.png`}
                                                src={data[2]?.cover}
                                                alt="banner 3"
                                                className="w-full h-full object-cover"
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            className="best-services w-full bg-white flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px]
              px-10 lg:py-0 py-10 gap-3"
                        >
                            <div className="item flex-1">
                                <div className="flex space-x-5 items-center">
                                    <div>
                    <span>
                      <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                            d="M1 1H5.63636V24.1818H35"
                            stroke="#FFBB38"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                        />
                        <path
                            d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                            stroke="#FFBB38"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                        />
                        <path
                            d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                            stroke="#FFBB38"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                        />
                        <path
                            d="M34.9982 1H11.8164V18H34.9982V1Z"
                            stroke="#FFBB38"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                        />
                        <path
                            d="M11.8164 7.18164H34.9982"
                            stroke="#FFBB38"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                        />
                      </svg>
                    </span>
                                    </div>
                                    <div>
                                        <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                                            Tiếp cận thông minh
                                        </p>
                                        <p className="text-sm text-qgray">
                                            Với hơn 20 triệu người dùng và áp dụng AI vào định tuyến tin đăng
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="item flex-1">*/}
                            {/*  <div className="flex space-x-5 items-center">*/}
                            {/*    <div>*/}
                            {/*      <span>*/}
                            {/*        <svg*/}
                            {/*          width="32"*/}
                            {/*          height="34"*/}
                            {/*          viewBox="0 0 32 34"*/}
                            {/*          fill="none"*/}
                            {/*          xmlns="http://www.w3.org/2000/svg"*/}
                            {/*        >*/}
                            {/*          <path*/}
                            {/*            d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"*/}
                            {/*            stroke="#FFBB38"*/}
                            {/*            strokeWidth="2"*/}
                            {/*            strokeMiterlimit="10"*/}
                            {/*          />*/}
                            {/*          <path*/}
                            {/*            d="M30.7 2L29.5 10.85L20.5 9.65"*/}
                            {/*            stroke="#FFBB38"*/}
                            {/*            strokeWidth="2"*/}
                            {/*            strokeMiterlimit="10"*/}
                            {/*            strokeLinecap="square"*/}
                            {/*          />*/}
                            {/*        </svg>*/}
                            {/*      </span>*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*      <p className="text-black text-[15px] font-700 tracking-wide mb-1">*/}
                            {/*        Tin đăng tin cậy*/}
                            {/*      </p>*/}
                            {/*      <p className="text-sm text-qgray">*/}
                            {/*        Hàng thật, giá thật*/}
                            {/*      </p>*/}
                            {/*    </div>*/}
                            {/*  </div>*/}
                            {/*</div>*/}
                            <div className="item flex-1">
                                <div className="flex space-x-5 items-center">
                                    <div>
                    <span>
                      <svg
                          width="32"
                          height="38"
                          viewBox="0 0 32 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                            d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
                            stroke="#FFBB38"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                        />
                        <path
                            d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                            stroke="#FFBB38"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                        />
                        <path
                            d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                            stroke="#FFBB38"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                        />
                      </svg>
                    </span>
                                    </div>
                                    <div>
                                        <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                                            Tin đăng tin cậy
                                        </p>
                                        <p className="text-sm text-qgray">
                                            Xác thực tin đăng, người đăng đảm bảo thông tin, hình ảnh chính xác
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item flex-1">
                                <div className="flex space-x-5 items-center">
                                    <div>
                    <span>
                      <svg
                          width="32"
                          height="35"
                          viewBox="0 0 32 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                            d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
                            stroke="#FFBB38"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                        />
                        <path
                            d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
                            stroke="#FFBB38"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                        />
                        <path
                            d="M16 28V22"
                            stroke="#FFBB38"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                        />
                        <path
                            d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
                            stroke="#FFBB38"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                        />
                        <path
                            d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
                            stroke="#FFBB38"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="square"
                        />
                      </svg>
                    </span>
                                    </div>
                                    <div>
                                        <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                                            Chất lượng tốt nhất
                                        </p>
                                        <p className="text-sm text-qgray">
                                            Đảm bảo sản phẩm
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
