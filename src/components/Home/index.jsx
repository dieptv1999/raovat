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
import dynamic from "next/dynamic";
// const AdsSlider = dynamic(() => import("./AdsSlider"), {ssr: false});

export default function Home({adsList}) {
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
          products={products}
          brands={brands}
          categoryTitle="Mobile & Tablet"
          sectionTitle="Gamer World"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />
        <BrandSection
          sectionTitle="Shop by Brand"
          className="brand-section-wrapper mb-[60px]"
        />
        <CampaignCountDown
          className="mb-[60px]"
          lastDate="2024-03-04 4:00:00"
        />
        <ViewMoreTitle
          className="top-selling-product mb-[60px]"
          seeMoreUrl="/all-products"
          categoryTitle="Top Selling Products"
        >
          <SectionStyleTwo products={products.slice(3, products.length)} />
        </ViewMoreTitle>
        <ViewMoreTitle
          className="best-sallers-section mb-[60px]"
          seeMoreUrl="/sallers"
          categoryTitle="Best Saller"
        >
          <BestSellers />
        </ViewMoreTitle>
        <ProductsAds
          ads={[`/assets/images/ads-1.png`, `/assets/images/ads-2.png`]}
          sectionHeight="sm:h-[295px] h-full"
          className="products-ads-section mb-[60px]"
        />
        <SectionStyleOne
          categoryBackground={`/assets/images/section-category-2.jpg`}
          products={products.slice(4, products.length)}
          brands={brands}
          categoryTitle="Electronics"
          sectionTitle="Popular Sales"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />
        <ProductsAds
          ads={[`/assets/images/ads-3.png`]}
          className="products-ads-section mb-[60px]"
          sectionHeight="sm:h-[295px] h-full"
        />
        <SectionStyleThree
          products={products}
          sectionTitle="New Arrivals"
          seeMoreUrl="/all-products"
          className="new-products mb-[60px]"
        />
        <ProductsAds
          sectionHeight="sm:h-[195px] h-full"
          ads={[`/assets/images/ads-4.png`]}
          className="products-ads-section mb-[60px]"
        />
        <SectionStyleFour
          products={products}
          sectionTitle="Popular Sales"
          seeMoreUrl="/all-products"
          className="category-products mb-[60px]"
        />
      </Layout>
    </>
  );
}
