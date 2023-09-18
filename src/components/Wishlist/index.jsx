import BreadcrumbCom from "../BreadcrumbCom";
import EmptyWishlistError from "../EmptyWishlistError";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import ProductsTable from "./ProductsTable";
import {useCallback, useEffect, useState} from "react";
import ApiFactory from "../../apis/ApiFactory";
import {useAuthContext} from "../../context/AuthContext";
import ErrorThumb from "../FourZeroFour/ErrorThumb";
import Link from "next/link";

export default function Wishlist({wishlist = true}) {
    const {user} = useAuthContext()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(async () => {
        if (!user?.userId) return
        setLoading(true);
        const resp = await ApiFactory.getRequest("UserApi").getListMyFollow({
            user_id: user.userId,
        })
        setLoading(false);
        if (resp && resp.success) {
            setData(resp?.listSell)
        }
    }, [user?.userId])

    const unLike = useCallback(async (postId) => {
        if (!user?.userId) return
        const resp = await ApiFactory.getRequest("UserApi").addFollow({
            user_id: user.userId,
            sell_id: postId,
        })
        if (resp && !resp.success) {
            fetchData()
        }
    }, [fetchData, user?.userId])

    useEffect(() => {
        fetchData()
    }, [fetchData]);

    return (
        <Layout childrenClasses={wishlist ? "pt-0 pb-0" : ""}>
            {wishlist === false ? (
                <div className="wishlist-page-wrapper w-full">
                    <div className="container-x mx-auto">
                        <BreadcrumbCom
                            paths={[
                                {name: "trang chủ", path: "/"},
                                {name: "danh sách yêu thích", path: "/wishlist"},
                            ]}
                        />
                        <EmptyWishlistError/>
                    </div>
                </div>
            ) : (
                <div className="wishlist-page-wrapper w-full bg-white pb-[60px]">
                    <div className="w-full">
                        <PageTitle
                            title="Danh sách yêu thích"
                            breadcrumb={[
                                {name: "trang chủ", path: "/"},
                                {name: "danh sách yêu thích", path: "/wishlist"},
                            ]}
                        />
                    </div>
                    <div className="w-full mt-[23px]">
                        <div className="container-x mx-auto">
                            {loading
                                ? <div className={'inline-flex w-full justify-center py-4'}>
                                    <span className="loading loading-ball loading-xs"></span>
                                    <span className="loading loading-ball loading-sm"></span>
                                    <span className="loading loading-ball loading-md"></span>
                                    <span className="loading loading-ball loading-lg"></span>
                                </div>
                                : (data && data.length > 0) ?
                                    <ProductsTable className="mb-[30px]" data={data}
                                           unLike={unLike}
                            />
                            : <div className="empty-card-wrapper w-full">
                                        <div className="flex justify-center items-center w-full">
                                            <div>
                                                {/*<div className="sm:mb-10 mb-0 transform sm:scale-100 scale-50">*/}
                                                {/*    <ErrorThumb />*/}
                                                {/*</div>*/}
                                                <div data-aos="fade-up" className="empty-content w-full">
                                                    <h1 className="sm:text-xl text-base font-semibold text-center mb-5">
                                                        Lấy làm tiếc! Bạn chưa yêu thích tin tức nào
                                                    </h1>
                                                    <Link href="/">
                                                        <div className="flex justify-center w-full ">
                                                            <div className="w-[200px] h-[50px] ">
                                                                <button type="button" className="yellow-btn">
                                                                    Quay trở lại trang chủ
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                            {/*<div className="w-full mt-[30px] flex sm:justify-end justify-start">*/}
                            {/*  <div className="sm:flex sm:space-x-[30px] items-center">*/}
                            {/*    <button type="button">*/}
                            {/*      <div className="w-full text-sm font-semibold text-qred mb-5 sm:mb-0">*/}
                            {/*        Xóa tất cả*/}
                            {/*      </div>*/}
                            {/*    </button>*/}
                            {/*    <div className="h-[50px]">*/}
                            {/*      <button type="button" className="yellow-btn px-6">*/}
                            {/*        <div className="w-full text-sm font-semibold">*/}
                            {/*          Thêm tất cả vào giỏ hàng*/}
                            {/*        </div>*/}
                            {/*      </button>*/}
                            {/*    </div>*/}
                            {/*  </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
}
