import Image from "next/image";
import ProductCardStyleOne from "../Helpers/Cards/ProductCardStyleOne";
import DataIteration from "../Helpers/DataIteration";
import Star from "../Helpers/icons/Star";
import ApiFactory from "../../apis/ApiFactory";
import {useCallback, useEffect, useState} from "react";
import {ListCardLoading} from "../Loading";

export default function SellerInfo({product}) {
    const [owner, setOwner] = useState({})
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingOwner, setLoadingOwner] = useState(false)
    const fetchOwner = async () => {
        setLoadingOwner(true)
        const resp = await ApiFactory.getRequest("UserApi").getUserSell({
            user_id: product.user_id,
        })
        setLoadingOwner(false)
        if (resp && resp.success) {
            setOwner(resp?.user)
        }
    }

    const fetchData = useCallback(async () => {
        if (!product.user_id) return;
        setLoading(true)
        const resp = await ApiFactory.getRequest("UserApi").getListSellViaUser({
            user_id: product.id,
        })
        setLoading(false)
        if (resp.success) {
            setData(resp.listSell ?? [])
        }
    }, [product])

    useEffect(() => {
        if (product)
            fetchOwner();
    }, [product])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div className="saller-info-wrapper w-full">
            {loadingOwner
                ? <div className={'inline-flex w-full justify-center py-4'}>
                    <span className="loading loading-ball loading-xs"></span>
                    <span className="loading loading-ball loading-sm"></span>
                    <span className="loading loading-ball loading-md"></span>
                    <span className="loading loading-ball loading-lg"></span>
                </div>
                : <div className="saller-info sm:flex justify-between items-center pb-[30px] border-b border-[#E8E8E8]">
                    <div className="sm:flex sm:space-x-5 items-center sm:w-1/4">
                        <div className="saller w-[73px] h-[73px] rounded-full overflow-hidden relative">
                            <Image
                                layout="fill"
                                src={owner?.avatar ? owner.avatar : `/assets/images/comment-user-1.png`}
                                alt="saller"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h6 className="text-[18px] font-medium leading-[30px]">
                                {owner.name}
                            </h6>
                            <p className="text-[13px] font-normal text-qgray leading-[30px]">
                                {owner.current}
                            </p>
                            <div className="flex items-center mt-4">
                                <div className="flex">
                                    <Star w="15" h="15"/>
                                    <Star w="15" h="15"/>
                                    <Star w="15" h="15"/>
                                    <Star w="15" h="15"/>
                                    <Star w="15" h="15"/>
                                </div>
                                <span className="text-[13px] font-normal ml-1">(4.5)</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full sm:flex sm:space-x-5 justify-between sm:ml-[60px] mt-5 sm:mt-0">
                        <div className="w-full ">
                            <ul>
                                <li className="text-qgray leading-[30px]">
                <span className="text-[15px] font-normal text-qblack">
                  Phone
                </span>
                                    : {owner.phone}
                                </li>
                                <li className="text-qgray leading-[30px]">
                <span className="text-[15px] font-normal text-qblack">
                  Loại người dùng
                </span>
                                    : {owner.sell_type}
                                </li>
                                <li className="text-qgray leading-[30px]">
                <span className="text-[15px] font-normal text-qblack">
                  Chủ đề
                </span>
                                    : {owner.focus}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>}
            {data && data.length > 0
                ? <div className="saller-product w-full mt-[30px]">
                    <h1 className="text-[18px] font-medium mb-5">Sản phẩm từ người bán</h1>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                        <DataIteration
                            datas={data}
                            startLength={0}
                            endLength={8}
                        >
                            {({datas}) => (
                                <div key={datas.id} className="item">
                                    <ProductCardStyleOne datas={datas}/>
                                </div>
                            )}
                        </DataIteration>
                    </div>
                    {loading ? <ListCardLoading numEl={4}/> : <div/>}
                </div>
                : null}
        </div>
    );
}
