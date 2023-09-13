import blog from "../../data/blogs.json";
import BlogCard from "../Helpers/Cards/BlogCard";
import DataIteration from "../Helpers/DataIteration";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import ApiFactory from "../../apis/ApiFactory";
import {useCallback, useEffect, useState} from "react";
import BreadcrumbCom from "../BreadcrumbCom";

export default function Blogs() {
    const [posts, setPosts] = useState();
    const [active, setActive] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchPost = useCallback(async () => {
        setLoading(true)
        const resp = await ApiFactory.getRequest("ProductApi").getListAds({})
        setLoading(false)
        if (resp.success) {
            setPosts(resp?.listAds)
        }
    }, [])

    const fetchFeed = useCallback(async () => {
        setLoading(true)
        const resp = await ApiFactory.getRequest("ProductApi").getListFeed({})
        setLoading(false)
        if (resp.success) {
            setPosts(resp?.listNoti)
        }
    }, [])

    useEffect(() => {
        if (active === 1) {
            fetchPost()
        } else {
            fetchFeed()
        }
    }, [fetchPost, fetchFeed, active]);

    return (
        <Layout childrenClasses="pt-0 pb-0">
            <div className="blogs-wrapper w-full-width">
                <div className="title-bar">
                    <div className={`page-title-wrapper bg-[#FFFAEF] w-full`}>
                        <div className="container-x mx-auto">
                            <div className="pt-5 pb-1">
                                <BreadcrumbCom paths={[
                                    {name: "trang chủ", path: "/"},
                                    {name: "blogs", path: "/blogs"},
                                ]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full pb-[60px]">
                <div className="container-x mx-auto">
                    <div className="tabs tabs-boxed my-4 bg-[#FFFAEF]">
                        <a className={`tab flex-1 tab-lg ${active === 1 ? 'tab-active !bg-qyellow !text-black' : ''}`} onClick={() => setActive(1)}>Các nhóm hữu ích</a>
                        <a className={`tab flex-1 tab-lg ${active === 2 ? 'tab-active !bg-qyellow !text-black' : ''}`} onClick={() => setActive(2)}>Các công cụ, trò chơi hay</a>
                    </div>
                    <div className="w-full">
                        {loading
                            ? <div className={'inline-flex w-full justify-center py-4'}>
                                <span className="loading loading-ball loading-xs"></span>
                                <span className="loading loading-ball loading-sm"></span>
                                <span className="loading loading-ball loading-md"></span>
                                <span className="loading loading-ball loading-lg"></span>
                            </div>
                            : posts && posts.length > 0 ?
                            <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5">
                                <DataIteration
                                    datas={posts}
                                    startLength={0}
                                    endLength={posts.length}
                                >
                                    {({datas}) => (
                                        <div
                                            data-aos="fade-up"
                                            key={datas.id}
                                            className="item w-full"
                                        >
                                            <BlogCard datas={datas}/>
                                        </div>
                                    )}
                                </DataIteration>
                            </div>
                            : <div className={'p-6 text-xl text-center'}>Không có bài viết nào</div>}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
