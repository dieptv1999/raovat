
import Home from './../src/components/Home/index';
import {getInstanceAxios} from "../src/apis/Client";

export default function HomePage({adsList}) {
  return (
    <>
      <Home adsList={adsList}/>
    </>
  )
}

export const getStaticProps = async () => {
  const client = getInstanceAxios(process.env.NEXT_PUBLIC_BASE_URL);
  const res = await client.post('getListAds')
  const adsList = res.data?.listAds;
  return { props: { adsList } }
}
