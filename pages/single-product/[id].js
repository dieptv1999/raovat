import React from "react";
import SingleProductPage from "../../src/components/SingleProductPage/index";
import {getInstanceAxios} from "../../src/apis/Client";
import isEmpty from "lodash/isEmpty";

export default function SingleProduct({product}) {
    return <SingleProductPage product={product}/>;
}

export const getServerSideProps = async ({params}) => {
    if (!params.id) return {
        notFound: true,
    }
    const client = getInstanceAxios(process.env.NEXT_PUBLIC_BASE_URL);
    const res = await client.post('getDetailSell', {
        id: params.id,
    })

    const product = res.data?.sell;

    if (!product || isEmpty(product)) {
        return {
            notFound: true,
        }
    }

    return { props: { product } }
}