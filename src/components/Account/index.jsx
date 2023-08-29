import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import BreadcrumbCom from "../BreadcrumbCom";
import Image from "next/image";
import {useCallback, useEffect, useState} from "react";
import ApiFactory from "../../apis/ApiFactory";
import DataIteration from "../Helpers/DataIteration";
import ProductCardStyleOne from "../Helpers/Cards/ProductCardStyleOne";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import {useAuthContext} from "../../context/AuthContext";

export default function Account({user}) {
    console.log(user)
    const {user: selfUser} = useAuthContext()
    const [data, setData] = useState([])
    const [followed, setFollowed] = useState(false)
    const [wantCancelFollow, setWantCancelFollow] = useState(false)

    const fetchData = useCallback(async () => {
        if (!user.id) return;
        const resp = await ApiFactory.getRequest("UserApi").getListSellViaUser({
            user_id: user.id,
        })
        if (resp.success) {
            setData(resp.listSell ?? [])
        }
    }, [user])

    const checkFollow = useCallback(async () => {
        if (!user.id) return;
        const resp = await ApiFactory.getRequest("UserApi").checkFollower({
            receive: user.id,
            send: selfUser.userId
        })
        if (resp.success) {
            setFollowed(true)
        }
    }, [selfUser.userId, user.id])

    const follow = useCallback(async () => {
        if (!user.id) return;
        const resp = await ApiFactory.getRequest("UserApi").addFollower({
            receive: user.id,
            send: selfUser.userId
        })
        if (resp.success) {
            setFollowed(true)
        } else {
            setFollowed(false)
        }
    }, [selfUser.userId, user.id])

    useEffect(() => {
        fetchData()
        checkFollow()
    }, [checkFollow, fetchData]);

    return (
        <Layout childrenClasses="pt-0 pb-0">
            <div className="blog-page-wrapper w-full">
                <div className="title-area mb-[60px]">
                    <div className=" relative page-title-wrapper bg-[#FFFAEF] w-full h-[173px] py-10">
                        {/*<div className="container-x mx-auto">*/}
                        {/*    <div className="mb-5">*/}
                        {/*        <BreadcrumbCom paths={[*/}
                        {/*            {name: "trang chủ", path: "/"},*/}
                        {/*        ]}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className='h-[100px] md:h-[150px] mb-[-35px] md:mb-[-45px] absolute bottom-0 left-0 w-full
                        flex justify-center'>
                            <div className="max-w-screen-lg w-full flex justify-between">
                                <div className="flex justify-start items-center h-full relative">
                                    <div className='h-full aspect-square rounded-full overflow-hidden
                            relative'>
                                        <Image
                                            src={user.avatar ? user.avatar : `/assets/images/user_default.png?v=1`}
                                            alt={'account avatar'}
                                            layout={'fill'}
                                        />
                                    </div>
                                    <div
                                        className={'absolute bottom-[35px] md:bottom-[45px] left-[100px] md:left-[150px] ml-3 md:ml-8'}>
                                        <div
                                            className={'text-2xl md:text-3xl font-semibold whitespace-nowrap'}>{user.name}</div>
                                    </div>
                                </div>
                                <div className={'self-end flex items-center space-x-2'}>
                                    <button
                                        className={`btn rounded-full ${followed ? (wantCancelFollow 
                                                ? 'border-red-500 text-red-500' 
                                                : 'btn-outline border-gray-300') 
                                            : 'bg-black text-white hover:text-black'} btn-sm`}
                                        onClick={follow}
                                        onMouseOver={() => setWantCancelFollow(true)}
                                        onMouseLeave={() => setWantCancelFollow(false)}
                                    >
                                        {followed ? (wantCancelFollow ? 'Huỷ theo dõi' : 'Đang theo dõi') : 'Theo dõi'}
                                    </button>
                                    <button className={'btn rounded-full bg-black text-white hover:text-black btn-sm'}>
                                        Chia sẻ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-24">
                    <div className='max-w-screen-lg w-full'>
                        <div className="products-section w-full">
                            <div
                                className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                                <DataIteration datas={data} startLength={0} endLength={48}>
                                    {({datas}) => (
                                        <div data-aos="fade-up" key={datas.id} className="item">
                                            <ProductCardStyleOne type={1} datas={datas}/>
                                        </div>
                                    )}
                                </DataIteration>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}