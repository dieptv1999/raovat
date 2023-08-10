import Facebook from "../../Helpers/icons/Facebook";
import Instagram from "../../Helpers/icons/Instagram";
import Youtube from "../../Helpers/icons/Youtube";
import Link from "next/link";

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
            <h1 className="text-[18] font-500 text-[#2F2F2F] mb-5">Raovat24h</h1>
            <p className="text-[#9A9A9A] text-[15px] w-[247px] leading-[28px]">
              Kênh rao vặt, mua bán tốt nhất Việt Nam.
            </p>
          </div>
          <div className="flex-1 lg:flex">
            <div className="lg:w-1/3 w-full mb-10 lg:mb-0">
              <div className="mb-5">
                <h6 className="text-[18] font-500 text-[#2F2F2F]">
                  Dịch vụ
                </h6>
              </div>
              <div>
                <ul className="flex flex-col space-y-4 ">
                  <li>
                    <Link href="/about">
                                <span
                                  className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                  Về chúng tôi
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
                    <Link href="https://play.google.com/store/apps/details?id=com.zegome.app.lichvannien&hl=vi&gl=US"
                          passHref>
                      <a target={'_blank'}>
                                <span
                                  className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                 Lịch vạn niên
                                </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0 ">
              <div>
                <div className="mb-5">
                  <h6 className="text-[18] font-500 text-[#2F2F2F]">
                    Liên kết chung
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4 ">
                    <li>
                      <Link href="/blogs">

                                  <span
                                    className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                    Blog
                                  </span>
                      </Link>
                    </li>
                    {/*      <li>*/}
                    {/*          <Link href="/tracking-order">*/}

                    {/*<span*/}
                    {/*    className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">*/}
                    {/*  Tracking Order*/}
                    {/*</span>*/}
                    {/*          </Link>*/}
                    {/*      </li>*/}
                    <li>
                      <Link href="/become-saller">

                                  <span
                                    className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                    Đăng bán
                                  </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
              <div>
                <div className="mb-5">
                  <h6 className="text-[18] font-500 text-[#2F2F2F]">
                    Hữu ích
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4 ">
                    {/*<li>*/}
                    {/*    <Link href="/flash-sale">*/}
                    {/*      <span*/}
                    {/*          className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">*/}
                    {/*        Flash Sale*/}
                    {/*      </span>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    <li>
                      <Link href="/faq">
                                              <span
                                                className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                                FAQ
                                              </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                                              <span
                                                className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                                                Hỗ trợ
                                              </span>
                      </Link>
                    </li>
                  </ul>
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
                <a rel="noopener noreferrer" target={'_blank'} className="border border-gray-300 rounded-full h-[28px] w-[28px] flex items-center justify-center">
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
                ZoneMob
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
              <span>Lê Thánh Tôn, P. Bến Nghé, Q.1, TP. Hồ Chí Minh</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}