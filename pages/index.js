import Home from './../src/components/Home/index';
import {getInstanceAxios} from "../src/apis/Client";
import isEmpty from "lodash/isEmpty";

export default function HomePage({adsList, newsHot}) {
  return (
    <>
      <Home adsList={adsList} newsHot={newsHot}/>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const client = getInstanceAxios(process.env.NEXT_PUBLIC_BASE_URL);
    const res = await client.post('getListAds')
    const adsList = res.data?.listAds;

    const resSell = await client.post('getListSellMore')
    const newsHot = resSell.data?.listSell;

    if (!newsHot || isEmpty(newsHot)) {
      return {
        notFound: true,
      }
    }

    return {
      props: {adsList, newsHot},
      revalidate: 90, // 1p30s
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}
