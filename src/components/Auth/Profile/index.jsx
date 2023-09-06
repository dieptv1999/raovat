import {useEffect, useState} from "react";
import datas from "../../../data/products.json";
import BreadcrumbCom from "../../BreadcrumbCom";
import Layout from "../../Partials/Layout";
import IcoAdress from "./icons/IcoAdress";
import IcoCart from "./icons/IcoCart";
import IcoDashboard from "./icons/IcoDashboard";
import IcoLogout from "./icons/IcoLogout";
import IcoLove from "./icons/IcoLove";
import IcoPassword from "./icons/IcoPassword";
import IcoPayment from "./icons/IcoPayment";
import IcoPeople from "./icons/IcoPeople";
import IcoReviewHand from "./icons/IcoReviewHand";
import AddressesTab from "./tabs/AddressesTab";
import Dashboard from "./tabs/Dashboard";
import OrderTab from "./tabs/OrderTab";
import PasswordTab from "./tabs/PasswordTab";
import Payment from "./tabs/Payment";
import ProfileTab from "./tabs/ProfileTab";
import ReviewTab from "./tabs/ReviewTab";
import SupportTab from "./tabs/SupportTab";
import WishlistTab from "./tabs/WishlistTab";
import {useRouter} from "next/router";
import Link from "next/link";
import IcoList from "./icons/IcoList";
import PostTab from "./tabs/PostTab";
import signOutFirebase from "../../../../firebase/auth/signOut";

export default function Profile() {
    const [switchDashboard, setSwitchDashboard] = useState(false);
    const location = useRouter();
    const getHashContent = location.asPath.split("#");
    const [active, setActive] = useState("dashboard");
    useEffect(() => {
        setActive(
            getHashContent && getHashContent.length > 1
                ? getHashContent[1]
                : "dashboard"
        );
    }, [getHashContent]);
    return (
        <Layout childrenClasses="pt-0 pb-0">
            <div className="profile-page-wrapper w-full">
                <div className="container-x mx-auto">
                    <div className="w-full my-10">
                        <BreadcrumbCom
                            paths={[
                                {name: "trang chủ", path: "/"},
                                {name: "Thông tin cá nhân", path: "/profile"},
                            ]}
                        />
                        <div className="w-full bg-white px-3 lg:px-10 py-3 lg:py-9">
                            <div className="title-area w-full flex justify-between items-center">
                                <h1 className="text-[22px] font-bold text-qblack">
                                    Trang cá nhân của bạn
                                </h1>
                                {/*<div className="switch-dashboard flex space-x-3 items-center">*/}
                                {/*  <p className="text-qgray text-base">Switch Dashboard</p>*/}
                                {/*  <button*/}
                                {/*    onClick={() => setSwitchDashboard(!switchDashboard)}*/}
                                {/*    type="button"*/}
                                {/*    className="w-[73px] h-[31px] border border-[#D9D9D9] rounded-full relative "*/}
                                {/*  >*/}
                                {/*    <div*/}
                                {/*      className={`w-[23px] h-[23px] bg-qblack rounded-full absolute top-[3px] transition-all duration-300 ease-in-out ${*/}
                                {/*        switchDashboard ? 'left-[44px]' : 'left-[4px]'*/}
                                {/*      }`}*/}
                                {/*    ></div>*/}
                                {/*  </button>*/}
                                {/*</div>*/}
                            </div>
                            <div className="profile-wrapper w-full mt-8 flex flex-col lg:flex-row lg:space-x-10">
                                <div className="lg:w-[236px] lg:min-h-[600px] border-r border-[rgba(0, 0, 0, 0.1)]">
                                    <div className="flex lg:flex-col lg:space-y-10 overflow-y-scroll lg:overflow-y-auto space-x-6 lg:space-x-0
                  items-center lg:items-start border-b lg:border-none pb-3 lg:pb-0">
                                        <div className="item group whitespace-nowrap lg:whitespace-normal">
                                            <Link href="/profile#dashboard">
                                                <div
                                                    className={`flex space-x-3 items-center text-qgray hover:text-qblack cursor-pointer`}>
                          <span>
                            <IcoDashboard/>
                          </span>
                                                    <span className=" font-normal text-base">
                            Bảng quản lý
                          </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="item group whitespace-nowrap lg:whitespace-normal">
                                            <Link href="/profile#post">
                                                <div
                                                    className="flex space-x-3 items-center text-qgray hover:text-qblack cursor-pointer">
                          <span>
                            <IcoList/>
                          </span>
                                                    <span className=" font-normal text-base">
                            Quản lý tin
                          </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="item group whitespace-nowrap lg:whitespace-normal">
                                            <Link href="/profile#profile">
                                                <div
                                                    className="flex space-x-3 items-center text-qgray hover:text-qblack cursor-pointer">
                          <span>
                            <IcoPeople/>
                          </span>
                                                    <span className=" font-normal text-base">
                            Trang cá nhân
                          </span>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="item group whitespace-nowrap lg:whitespace-normal">
                                            <Link href="/profile#payment">
                                                <div
                                                    className="flex space-x-3 items-center text-qgray hover:text-qblack cursor-pointer">
                          <span>
                            <IcoPayment/>
                          </span>
                                                    <span className=" font-normal text-base">
                            Phương thức thanh toán
                          </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="item group whitespace-nowrap lg:whitespace-normal">
                                            <Link href="/profile#order">
                                                <div
                                                    className="flex space-x-3 items-center text-qgray hover:text-qblack cursor-pointer">
                          <span>
                            <IcoCart/>
                          </span>
                                                    <span className=" font-normal text-base">Đơn hàng</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="item group whitespace-nowrap lg:whitespace-normal">
                                            <Link href="/profile#wishlist">
                                                <div
                                                    className="flex space-x-3 items-center text-qgray hover:text-qblack cursor-pointer">
                          <span>
                            <IcoLove/>
                          </span>
                                                    <span className=" font-normal text-base">
                            Danh sách yêu thích
                          </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="item group whitespace-nowrap lg:whitespace-normal">
                                            <Link href="/profile#follower">
                                                <div
                                                    className="flex space-x-3 items-center text-qgray hover:text-qblack cursor-pointer">
                          <span>
                            <IcoAdress/>
                          </span>
                                                    <span className=" font-normal text-base">
                            Người đang theo dõi
                          </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="item group whitespace-nowrap lg:whitespace-normal">
                                            <Link href="/profile#review">
                                                <div
                                                    className="flex space-x-3 items-center text-qgray hover:text-qblack cursor-pointer">
                          <span>
                            <IcoReviewHand/>
                          </span>
                                                    <span className=" font-normal text-base">
                            Đánh giá
                          </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="item group whitespace-nowrap lg:whitespace-normal">
                                            <Link href="/profile#password">
                                                <div
                                                    className="flex space-x-3 items-center text-qgray hover:text-qblack cursor-pointer">
                          <span>
                            <IcoPassword/>
                          </span>
                                                    <span className=" font-normal text-base">
                            Đổi mật khẩu
                          </span>
                                                </div>
                                            </Link>
                                        </div>
                                        {/*<div className="item group whitespace-nowrap lg:whitespace-normal">*/}
                                        {/*  <Link href="/profile#support">*/}
                                        {/*    <div className="flex space-x-3 items-center text-qgray hover:text-qblack cursor-pointer">*/}
                                        {/*      <span>*/}
                                        {/*        <IcoSupport />*/}
                                        {/*      </span>*/}
                                        {/*      <span className=" font-normal text-base">*/}
                                        {/*        Support Ticket*/}
                                        {/*      </span>*/}
                                        {/*    </div>*/}
                                        {/*  </Link>*/}
                                        {/*</div>*/}
                                        <div className="item group whitespace-nowrap lg:whitespace-normal">
                                            <Link href="/">
                                                <div
                                                    className="flex space-x-3 items-center text-qgray hover:text-qblack cursor-pointer"
                                                    onClick={() => signOutFirebase()}>
                          <span>
                            <IcoLogout/>
                          </span>
                                                    <span className=" font-normal text-base">
                            Đăng xuất
                          </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="item-body dashboard-wrapper w-full">
                                        {active === "dashboard" ? (
                                            <>
                                                <Dashboard/>
                                            </>
                                        ) : active === "post" ? (
                                            <>
                                                <PostTab/>
                                            </>
                                        ) : active === "profile" ? (
                                            <>
                                                <ProfileTab/>
                                            </>
                                        ) : active === "payment" ? (
                                            <>
                                                <Payment/>
                                            </>
                                        ) : active === "order" ? (
                                            <>
                                                <OrderTab/>
                                            </>
                                        ) : active === "wishlist" ? (
                                            <>
                                                <WishlistTab/>
                                            </>
                                        ) : active === "follower" ? (
                                            <>
                                                <AddressesTab/>
                                            </>
                                        ) : active === "password" ? (
                                            <>
                                                <PasswordTab/>
                                            </>
                                        ) : active === "support" ? (
                                            <>
                                                <SupportTab/>
                                            </>
                                        ) : active === "review" ? (
                                            <>
                                                <ReviewTab products={datas.products}/>
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
