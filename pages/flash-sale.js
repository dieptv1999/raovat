import React from "react";
import FlashSale from "../src/components/FlashSale";
import {getInstanceAxios} from "../src/apis/Client";
import isEmpty from "lodash/isEmpty";
export default function flashSalePage({newsHot}) {
  return <FlashSale products={newsHot}/>;
}

export const getServerSideProps = async () => {
  try {
    const client = getInstanceAxios(process.env.NEXT_PUBLIC_BASE_URL);

    const resSell = await client.post('getListSellMore')
    const newsHot = resSell.data?.listSell;

    if (!newsHot || isEmpty(newsHot)) {
      return {
        notFound: true,
      }
    }

    return {
      props: {newsHot},
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}