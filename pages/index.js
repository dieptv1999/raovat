import Home from './../src/components/Home/index';
import {getInstanceAxios} from "../src/apis/Client";
import isEmpty from "lodash/isEmpty";

export default function HomePage({adsList, newsHot, news}) {
    return (
        <>
            <Home adsList={adsList} newsHot={newsHot} news={news}/>
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

        const resNews = await client.post('getListNews')
        const news = resNews.data?.listNews;
        console.log(news)

        if (!newsHot || isEmpty(newsHot)) {
            return {
                notFound: true,
            }
        }

        return {
            props: {adsList, newsHot, news,},
            revalidate: 90, // 1p30s
        }
    } catch (e) {
        return {
            notFound: true,
        }
    }
}
