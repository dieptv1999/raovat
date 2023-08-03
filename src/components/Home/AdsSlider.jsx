import React, { useEffect, useId, useState } from "react";
import Glide from "@glidejs/glide";
import CardCategory3 from "../CardCategories/CardCategory3";
import Head from "next/head";

const AdsSlider = ({data}) => {
  const id = useId();
  console.log(data)
  const UNIQUE_CLASS = "glide" + id.replace(/:/g, "_");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const OPTIONS = {
      perView: 2.8,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          gap: 28,
          perView: 2.5,
        },
        1279: {
          gap: 20,
          perView: 2.15,
        },
        1023: {
          gap: 20,
          perView: 1.6,
        },
        768: {
          gap: 20,
          perView: 1.2,
        },
        500: {
          gap: 20,
          perView: 1,
        },
      },
    };

    let slider = new Glide(`.${UNIQUE_CLASS}`, OPTIONS);
    slider.mount();
    setIsShow(true);
    return () => {
      slider.destroy();
    };
  }, [UNIQUE_CLASS]);

  return (
    <div
      className={`nc-DiscoverMoreSlider nc-p-l-container glide ${UNIQUE_CLASS} ${
        isShow ? "" : "invisible"
      }`}
    >
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/css/glide.core.min.css"
              integrity="sha512-YQlbvfX5C6Ym6fTUSZ9GZpyB3F92hmQAZTO5YjciedwAaGRI9ccNs4iw2QTCJiSPheUQZomZKHQtuwbHkA9lgw=="
              crossOrigin="anonymous" referrerPolicy="no-referrer"/>
      </Head>
      {/*<Heading*/}
      {/*  className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50 nc-p-r-container "*/}
      {/*  desc=""*/}
      {/*  rightDescText="Good things are waiting for you"*/}
      {/*  hasNextPrev*/}
      {/*>*/}
      {/*  Discover more*/}
      {/*</Heading>*/}
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides mb-12">
          {data?.map((item, index) => (
            <li key={item.id} className={`glide__slide`}>
              <CardCategory3
                name={item.title}
                desc={item.title}
                featuredImage={item.cover}
                color={'black'}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdsSlider;
