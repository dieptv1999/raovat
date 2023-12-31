import {useEffect, useState} from "react";
import SectionStyleFour from "../Helpers/SectionStyleFour";
import SectionStyleOne from "../Helpers/SectionStyleOne";
import SectionStyleTwo from "../Helpers/SectionStyleTwo";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import Layout from "../Partials/Layout";
import Ads from "./Ads";
import Banner from "./Banner";
import BestSellers from "./BestSellers";
import BrandSection from "./BrandSection";
import CampaignCountDown from "./CampaignCountDown";
import ProductsAds from "./ProductsAds";
import {SUBSCRIBER, SUBSCRIBER_TIMING} from "../../utils/constant";
import {useAuthContext} from "../../context/AuthContext";
// const AdsSlider = dynamic(() => import("./AdsSlider"), {ssr: false});

export default function Home({adsList, newsHot, news}) {
    const brands = [
        'Tin đăng gần bạn',
        'Tin dành cho bạn',
        'Tin được xem nhiều nhất',
        'Tin vip mỗi ngày'
    ];
    const [ads, setAds] = useState(false);
    const [sellers, setSellers] = useState([]);
    const {user} = useAuthContext();

    const adsHandle = () => {
        setAds(false);
    };
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem(SUBSCRIBER) !== 'true') {
                let d = localStorage.getItem(SUBSCRIBER_TIMING);
                try {
                    if (!d) {
                        setAds(true);
                        localStorage.setItem(SUBSCRIBER_TIMING, new Date().toString())
                    } else {
                        let datePast = new Date(d)
                        let diffMins = Math.round((((new Date() - datePast) % 86400000) % 3600000) / 60000);
                        if (diffMins > 10) {
                            setAds(true);
                            localStorage.setItem(SUBSCRIBER_TIMING, new Date().toString())
                        }
                    }
                } catch (e) {
                    localStorage.removeItem(SUBSCRIBER_TIMING)
                }
            }
        }
    }, []);
    return (
        <>
            <Layout>
                {ads && <Ads handler={adsHandle}/>}
                <div className="">
                    {/*<AdsSlider data={adsList}/>*/}
                </div>
                <Banner className="banner-wrapper mb-[60px]" data={adsList}/>
                <SectionStyleOne
                    products={newsHot}
                    brands={brands}
                    categoryTitle="Tin mới nhất"
                    sectionTitle="Tin mới nhất"
                    seeMoreUrl="/all-products"
                    className="category-products mb-[60px]"
                    authenticated={!!user}
                />
                <BrandSection
                    sectionTitle="" // title of brand list
                    className="brand-section-wrapper mb-[60px]"
                />
                <CampaignCountDown
                    className="mb-[60px]"
                    lastDate="2024-03-04 4:00:00"
                    appscreen={'/assets/images/ads-4.webp'}
                />
                <ViewMoreTitle
                    className="top-selling-product mb-[60px]"
                    seeMoreUrl="/all-products"
                    categoryTitle="Top sản phẩm bán chạy nhất"
                >
                    <SectionStyleTwo
                        products={newsHot.slice(3, newsHot.length)}
                        authenticated={!!user}
                    />
                </ViewMoreTitle>
                <ViewMoreTitle
                    className="best-sallers-section mb-[60px]"
                    seeMoreUrl="/sallers"
                    categoryTitle="Bán chạy nhất"
                >
                    <BestSellers sellers={sellers}/>
                </ViewMoreTitle>
                {news && news.length > 1 ? <ProductsAds
                    // ads={[`/assets/images/ads-1.webp`, `/assets/images/ads-2.webp`]}
                    ads={news}
                    sectionHeight="sm:h-[295px] h-full"
                    className="products-ads-section mb-[60px]"
                /> : <div/>}
                <SectionStyleOne
                    categoryBackground={`/assets/images/section-category-2.jpg`}
                    products={newsHot.slice(4, newsHot.length)}
                    brands={brands}
                    categoryTitle="Đồ điện tử"
                    sectionTitle="Danh mục phổ biến"
                    seeMoreUrl="/all-products"
                    className="category-products mb-[60px]"
                />
                {news && news.length > 2 ? <ProductsAds
                    ads={news.slice(2, 3)}
                    className="products-ads-section mb-[60px]"
                    sectionHeight="sm:h-[295px] h-full"
                /> : <div/>}
                {/*<SectionStyleThree*/}
                {/*  products={newsHot}*/}
                {/*  sectionTitle="New Arrivals"*/}
                {/*  seeMoreUrl="/all-products"*/}
                {/*  className="new-products mb-[60px]"*/}
                {/*/>*/}
                {/*<ProductsAds*/}
                {/*  sectionHeight="sm:h-[195px] h-full"*/}
                {/*  ads={[`/assets/images/ads-4.png`]}*/}
                {/*  className="products-ads-section mb-[60px]"*/}
                {/*/>*/}
                <SectionStyleFour
                    products={newsHot}
                    sectionTitle="Sản phẩm phổ biến"
                    seeMoreUrl="/all-products"
                    className="category-products mb-[60px]"
                />
            </Layout>
        </>
    );
}
