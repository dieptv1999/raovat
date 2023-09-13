import Facebook from "../../Helpers/icons/Facebook";
import Instagram from "../../Helpers/icons/Instagram";
import Youtube from "../../Helpers/icons/Youtube";
import Link from "next/link";
import Image from "next/image";

export default function Footer({type}) {

    return (
        <footer className="footer-section-wrapper bg-white print:hidden">
            <div className="container-x block mx-auto pt-[56px]">
                <div className="w-full flex flex-col items-center mb-[50px]">
                    {/* logo area */}
                    <div className="mb-[40px]">
                        {type === 3 ? (
                            <Link href="/">
                                <img
                                    width="152"
                                    height="42"
                                    src={`/assets/images/logo-3.svg`}
                                    alt="logo"
                                />
                            </Link>
                        ) : (
                            <Link href="/">
                                <img
                                    width="152"
                                    height="42"
                                    src={`/assets/images/logo.png`}
                                    alt="logo"
                                />
                            </Link>
                        )}

                    </div>
                    <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
                </div>
                <div className="lg:flex justify-between mb-[50px]">
                    <div className="lg:w-[424px]  ml-0 w-full mb-10 lg:mb-0">
                        <div className="mb-2">
                            {type === 3 ? (
                                <Link href="/">
                                    <img
                                        width="152"
                                        height="42"
                                        src={`/assets/images/logo-3.svg`}
                                        alt="logo"
                                    />
                                </Link>
                            ) : (
                                <Link href="/">
                                    <img
                                        width="152"
                                        height="42"
                                        src={`/assets/images/logo.png`}
                                        alt="logo"
                                    />
                                </Link>
                            )}
                        </div>
                        <h1 className="text-[18px] font-semibold tracking-wide uppercase text-[#2F2F2F] mb-5">Raovat24h</h1>
                        <p className="text-gray-700 text-[16px] w-[247px] leading-[28px] mb-6 font-semibold">
                            Kênh rao vặt, mua bán tốt nhất Việt Nam.
                        </p>
                        <span className="text-sm">
              <span className="font-bold mr-1">Trụ sở chính:</span>
              <span>Lê Thánh Tôn, P. Bến Nghé, Q.1, TP. Hồ Chí Minh</span>
            </span>
                        <div className="mt-2">
                            <span className="font-bold mr-1">Email:</span>
                            <span>hotroraovat24h@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-wrap w-full">
                            <div className="w-1/2 lg:w-1/3 mb-10 lg:mb-0">
                                <div className="mb-5">
                                    <h6 className="text-[18] font-500 text-[#2F2F2F]">
                                        Về chúng tôi
                                    </h6>
                                </div>
                                <div>
                                    <ul className="flex flex-col space-y-2 ">
                                        <li>
                                            <Link href="/about">
                                <span
                                    className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                  Giới thiệu
                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/terms-condition">
                                <span
                                    className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                  Điều khoản sử dụng
                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#"
                                                  passHref>
                                                <a target={'_blank'}>
                                <span
                                    className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                 Quy chế hoạt động
                                </span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#"
                                                  passHref>
                                                <a target={'_blank'}>
                                <span
                                    className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                 An toàn khi giao dịch
                                </span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#"
                                                  passHref>
                                                <a target={'_blank'}>
                                <span
                                    className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                 Liên hệ
                                </span>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/3 lg:flex lg:flex-col items-center mb-10 lg:mb-0 ">
                                <div>
                                    <div className="mb-5">
                                        <h6 className="text-[18] font-500 text-[#2F2F2F]">
                                            Hỗ trợ mua bán
                                        </h6>
                                    </div>
                                    <div>
                                        <ul className="flex flex-col space-y-2 ">
                                            <li>
                                                <Link href="/blogs">

                                  <span
                                      className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                    Tin tức & khuyến mãi
                                  </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">

                    <span
                        className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                      Báo giá quảng cáo
                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">

                                  <span
                                      className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                    Hỗ trợ đăng tin
                                  </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">

                                  <span
                                      className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                    Câu hỏi thường gặp
                                  </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">

                                  <span
                                      className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                    Hướng dẫn thanh toán
                                  </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/3 lg:flex lg:flex-col items-center mb-10 lg:mb-0">
                                <div>
                                    <div className="mb-5">
                                        <h6 className="text-[18] font-500 text-[#2F2F2F]">
                                            Thông tin mua bán
                                        </h6>
                                    </div>
                                    <div>
                                        <ul className="flex flex-col space-y-2 ">
                                            <li>
                                                <Link href="#">
                          <span
                              className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                            Cẩm nang mua bán
                          </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                              <span
                                                  className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                                Môi giới bất động sản
                                              </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                              <span
                                                  className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                                Giá nhà đất
                                              </span>
                                                </Link>
                                            </li>
                                            <li className="block lg:hidden">
                                                <Image src={'/assets/images/brand/raovat24h.png'} width={120}
                                                       height={120}
                                                       quality={100}
                                                       alt={"qr"}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/3 flex lg:hidden lg:flex-col items-center mb-10 lg:mb-0">
                                <div>
                                    <div className="mb-5">
                                        <h6 className="text-[18] font-500 text-[#2F2F2F]">
                                            Ứng dụng và kết nối
                                        </h6>
                                    </div>
                                    <div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-wrap g-3 items-center">
                                                <Link href={'https://facebook.com/ungdungmuaban'} passHref>
                                                    <a target={'_blank'}>
                                                        <Image
                                                            src={'/assets/images/brand/icons8-facebook-100.png'}
                                                            alt={'facebook'}
                                                            width={50}
                                                            height={50}
                                                            className="cursor-pointer"
                                                        />
                                                    </a>
                                                </Link>
                                                <Link href={'https://facebook.com/ungdungmuaban'} passHref>
                                                    <a target={'_blank'}>
                                                        <Image
                                                            src={'/assets/images/brand/icons8-zalo-144.png'}
                                                            alt={'zalo'}
                                                            width={45}
                                                            height={45}
                                                            className="cursor-pointer"
                                                        />
                                                    </a>
                                                </Link>
                                                <Link href={'https://www.youtube.com/@muabanraovat24h'} passHref>
                                                    <a target={'_blank'}>
                                                        <Image
                                                            src={'/assets/images/brand/icons8-youtube-100.png'}
                                                            alt={'youtube'}
                                                            width={50}
                                                            height={50}
                                                            className="cursor-pointer"
                                                        />
                                                    </a>
                                                </Link>
                                                <Link href={'https://www.tiktok.com/@muabanraovat'} passHref>
                                                    <a target={'_blank'}>
                                                        <Image
                                                            src={'/assets/images/brand/icons8-tiktok-100.png'}
                                                            alt={'tiktok'}
                                                            width={50}
                                                            height={50}
                                                            className="cursor-pointer"
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div>
                                                <Image
                                                    width={114.5}
                                                    height={35}
                                                    quality={100}
                                                    src={'/assets/images/brand/logo-bocongthuong.png?v=1'}
                                                    alt={'bocongthuong'}
                                                />
                                            </div>
                                            <div className="flex flex-col justify-between items-center py-1">
                                                <div>
                                                    <Link
                                                        href="https://play.google.com/store/apps/details?id=xemay.oto.batdongsan.dienthoai.muabannhanh.chotot.raovat.chomuaban.muaban"
                                                        passHref>
                                                        <a target={'_blank'}>
                                                            <Image
                                                                width="175"
                                                                height="52"
                                                                src={`/assets/images/play-store.png?v=2`}
                                                                alt=""
                                                            />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link href="https://apps.apple.com/app/id1566860234" passHref>
                                                        <a target={'_blank'}>
                                                            <Image
                                                                width="175"
                                                                height="58"
                                                                src={`/assets/images/apple-store.png?v=4`}
                                                                alt=""
                                                            />
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex gap-3 mt-3 ml-[-5px] hidden">
                            <div>
                                <img
                                    src={'/assets/images/brand/raovat24h.png?v=1'}
                                    // width={120}
                                    // height={120}
                                    className="w-[120px] h-[120px]"
                                    alt={"qr"}
                                    style={{objectFit: "contain"}}
                                />
                            </div>
                            <div className="flex flex-col justify-between items-center py-1">
                                <div>
                                    <Link
                                        href="https://play.google.com/store/apps/details?id=xemay.oto.batdongsan.dienthoai.muabannhanh.chotot.raovat.chomuaban.muaban"
                                        passHref>
                                        <a target={'_blank'}>
                                            <Image
                                                width="175"
                                                height="52"
                                                src={`/assets/images/play-store.png?v=2`}
                                                alt=""
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://apps.apple.com/app/id1566860234" passHref>
                                        <a target={'_blank'}>
                                            <Image
                                                width="175"
                                                height="58"
                                                src={`/assets/images/apple-store.png?v=4`}
                                                alt=""
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex space-x-3 items-center">
                                    <Link href={'https://facebook.com/ungdungmuaban'} passHref>
                                        <a target={'_blank'}>
                                            <Image
                                                src={'/assets/images/brand/icons8-facebook-100.png?v=1'}
                                                alt={'facebook'}
                                                width={50}
                                                height={50}
                                                quality={100}
                                                className="cursor-pointer"
                                            />
                                        </a>
                                    </Link>
                                    <Link href={'https://facebook.com/ungdungmuaban'} passHref>
                                        <a target={'_blank'}>
                                            <Image
                                                src={'/assets/images/brand/icons8-zalo-144.png?v=1'}
                                                alt={'zalo'}
                                                width={45}
                                                height={45}
                                                quality={100}
                                                className="cursor-pointer"
                                            />
                                        </a>
                                    </Link>
                                    <Link href={'https://www.youtube.com/@muabanraovat24h'} passHref>
                                        <a target={'_blank'}>
                                            <Image
                                                src={'/assets/images/brand/icons8-youtube-100.png?v=1'}
                                                alt={'youtube'}
                                                width={50}
                                                height={50}
                                                quality={100}
                                                className="cursor-pointer"
                                            />
                                        </a>
                                    </Link>
                                    <Link href={'https://www.tiktok.com/@muabanraovat'} passHref>
                                        <a target={'_blank'}>
                                            <Image
                                                src={'/assets/images/brand/icons8-tiktok-100.png?v=1'}
                                                alt={'tiktok'}
                                                width={50}
                                                height={50}
                                                quality={100}
                                                className="cursor-pointer"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div>
                                    <Image
                                        width={164}
                                        height={50}
                                        quality={100}
                                        src={'/assets/images/brand/logo-bocongthuong.png'} alt={'bocongthuong'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="bottom-bar border-t border-qgray-border py-4 lg:py-0 lg:h-[82px] lg:flex justify-between items-center">
                    <div className="flex lg:space-x-5 justify-between items-center mb-3">
                        <div className="flex space-x-5 items-center">
                            {/*<Link href="#" passHref>*/}
                            {/*    <a rel="noopener noreferrer" target={'_blank'}>*/}
                            {/*        <Instagram className="fill-current text-qgray hover:text-qblack"/>*/}
                            {/*    </a>*/}
                            {/*</Link>*/}
                            <Link href="https://www.facebook.com/ungdungmuaban" passHref>
                                <a rel="noopener noreferrer" target={'_blank'}
                                   className="border border-gray-300 rounded-full h-[28px] w-[28px] flex items-center justify-center">
                                    <Facebook className="fill-current text-qgray hover:text-qblack"/>
                                </a>
                            </Link>
                            {/*<Link href="#" passHref>*/}
                            {/*    <a rel="noopener noreferrer" target={'_blank'}>*/}
                            {/*        <Youtube className="fill-current text-qgray hover:text-qblack"/>*/}

                            {/*    </a>*/}
                            {/*</Link>*/}
                        </div>
                        <span className="sm:text-base text-[10px] text-qgray font-300">
              ©2023
              <a
                  href="https://play.google.com/store/apps/dev?id=7999218124998548142&hl=en_US"
                  target="_blank"
                  rel="noreferrer"
                  className="font-500 text-qblack mx-1"
              >
                Raovat24h JSC
              </a>
              All rights reserved
            </span>
                    </div>
                    <div className="">
                        <Link href="#">
                            {/*<img*/}
                            {/*    width="318"*/}
                            {/*    height="28"*/}
                            {/*    src={`/assets/images/payment-getways.png`}*/}
                            {/*    alt="payment-getways"*/}
                            {/*/>*/}
                            <span
                                className="text-sm lg:text-base">Lê Thánh Tôn, P. Bến Nghé, Q.1, TP. Hồ Chí Minh</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}