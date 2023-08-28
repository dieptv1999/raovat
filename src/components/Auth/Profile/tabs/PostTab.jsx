import React, {useCallback, useEffect, useState} from "react";
import InputQuantityCom from "../../../Helpers/InputQuantityCom";
import * as util from "util";
import utils from "../../../../utils";
import ApiFactory from "../../../../apis/ApiFactory";
import {useAuthContext} from "../../../../context/AuthContext";
import get from "lodash/get";

export default function PostTab({
                                    classTableName = ''
                                }) {
    const {user} = useAuthContext()
    const [data, setData] = useState([])
    const [active, setActive] = useState(1);
    const [tabs, setTabs] = useState([{
        id: 1, name: "đang hiển thị", visible: true,
    }, {
        id: 2, name: "hết hạn", visible: true,
    }, {
        id: 3, name: "bị từ chối", visible: true,
    }, {
        id: 4, name: "cần thanh toán", visible: true,
    }, {
        id: 5, name: "tin nháp", visible: true,
    }, {
        id: 6, name: "chờ duyệt", visible: true,
    }, {
        id: 7, name: "đã ẩn", visible: true,
    }])

    const fetchData = useCallback(async () => {
        if (!user.userId) return
        const resp = await ApiFactory.getRequest("UserApi").getListMySell({
            user_id: user.userId,
        })
        if (resp.success) {
            setData(resp.listSell)
        } else {
            // * sai request
        }
    }, [user.userId])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (<div className="tabs">
        {tabs.map(e => (<div
            className={`tab tab-lifted capitalize wire:click="omitted" ${e.id === active ? 'tab-active font-semibold' : ''}`}
            key={`post-tab-${e.id}`}
            onClick={() => setActive(e.id)}
        >{e.name}</div>))}

        <div className="mt-4">
            <div className={`w-full ${classTableName || ""}`}>
                <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <tbody>
                        {/* table heading */}
                        <tr className="text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase">
                            <td className="py-4 pl-10 block whitespace-nowrap  w-[380px]">
                                Tên sản phẩm
                            </td>
                            <td className="py-4 whitespace-nowrap text-center">
                                Danh mục
                            </td>
                            <td className="py-4 whitespace-nowrap text-center">giá</td>
                            <td className="py-4 whitespace-nowrap  text-center">
                                Kiểu tin
                            </td>
                            <td className="py-4 whitespace-nowrap  text-center">Địa chỉ</td>
                            <td className="py-4 whitespace-nowrap text-right w-[114px] block"></td>
                        </tr>
                        {/* table heading end */}
                        {data.map(e => (
                            <tr className="bg-white border-b hover:bg-gray-50" key={e.id}>
                                <td className="pl-10  py-4 ">
                                    <div className="flex space-x-6 items-center">
                                        <div
                                            className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                                            <img
                                                src={e.thumb ? e.thumb : `/assets/images/product-img-2.webp`}
                                                alt="product"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <p className="font-medium text-[15px] text-qblack">
                                                {e.title}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center py-4 px-2">
                                    <span className="text-[15px] font-normal text-center whitespace-nowrap">
                                        {e.collection}
                                    </span>
                                </td>
                                <td className="text-center py-4 px-2">
                                    <div className="flex space-x-1 items-center justify-center">
                                        <span className="text-[15px] font-normal">{utils.formatMoney(e.price)}</span>
                                    </div>
                                </td>
                                <td className=" py-4">
                                    <div className="flex justify-center items-center text-center whitespace-nowrap">
                                        {/*<InputQuantityCom/>*/}
                                        {e.type}
                                    </div>
                                </td>
                                <td className="text-right py-4">
                                    <div className="flex space-x-1 items-center justify-center">
                                        <span className="text-[15px] font-normal min-w-[100px] text-center mx-1">
                                            {`${e.address_more}, ${e.district}, ${e.city}`}
                                        </span>
                                    </div>
                                </td>
                                <td className="text-right py-4">
                                    <div className="flex space-x-1 items-center justify-center">
                                        <input type="checkbox" className="toggle toggle-warning" checked/>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>)
}