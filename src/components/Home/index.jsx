import { useEffect, useState } from "react";
import datas from "../../data/products.json";
import SectionStyleFour from "../Helpers/SectionStyleFour";
import SectionStyleOne from "../Helpers/SectionStyleOne";
import SectionStyleThree from "../Helpers/SectionStyleThree";
import SectionStyleTwo from "../Helpers/SectionStyleTwo";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import Layout from "../Partials/Layout";
import Ads from "./Ads";
import Banner from "./Banner";
import BestSellers from "./BestSellers";
import BrandSection from "./BrandSection";
import CampaignCountDown from "./CampaignCountDown";
import ProductsAds from "./ProductsAds";
// const AdsSlider = dynamic(() => import("./AdsSlider"), {ssr: false});

export default function Home({adsList, newsHot}) {
  console.log(newsHot)
  const { products } = datas;
  const brands = [];
  products.forEach((product) => {
    brands.push(product.brand);
  });
  const [ads, setAds] = useState(false);
  const adsHandle = () => {
    setAds(false);
  };
  useEffect(() => {
    setAds(true);
  }, []);
  return (
    <>
      <Layout>
        {ads && <Ads handler={adsHandle} />}
        <div className="">
        {/*<AdsSlider data={adsList}/>*/}
        </div>
        <Banner className="banner-wrapper mb-[60px]" data={adsList}/>
        <SectionStyleOne
          products={newsHot}
          brands={brands}
          categoryTitle="Mobile & Tablet"
          sectionTitle="Gamer World"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
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
          <SectionStyleTwo products={newsHot.slice(3, newsHot.length)} />
        </ViewMoreTitle>
        <ViewMoreTitle
          className="best-sallers-section mb-[60px]"
          seeMoreUrl="/sallers"
          categoryTitle="Best Saller"
        >
          <BestSellers />
        </ViewMoreTitle>
        <ProductsAds
          ads={[`/assets/images/ads-1.webp`, `/assets/images/ads-2.webp`]}
          sectionHeight="sm:h-[295px] h-full"
          className="products-ads-section mb-[60px]"
        />
        <SectionStyleOne
          categoryBackground={`/assets/images/section-category-2.jpg`}
          products={newsHot.slice(4, newsHot.length)}
          brands={brands}
          categoryTitle="Electronics"
          sectionTitle="Sản phẩm phổ biến"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />
        <ProductsAds
          ads={[`/assets/images/ads-3.webp`]}
          className="products-ads-section mb-[60px]"
          sectionHeight="sm:h-[295px] h-full"
        />
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
