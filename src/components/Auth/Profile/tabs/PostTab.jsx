import React, {useState} from "react";
import InputQuantityCom from "../../../Helpers/InputQuantityCom";
import * as util from "util";
import utils from "../../../../utils";

export default function PostTab({
                                    classTableName = ''
                                }) {
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
                                stock status
                            </td>
                            <td className="py-4 whitespace-nowrap text-center">giá</td>
                            <td className="py-4 whitespace-nowrap  text-center">
                                số lượng
                            </td>
                            <td className="py-4 whitespace-nowrap  text-center">Tổng</td>
                            <td className="py-4 whitespace-nowrap text-right w-[114px] block"></td>
                        </tr>
                        {/* table heading end */}
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="pl-10  py-4 ">
                                <div className="flex space-x-6 items-center">
                                    <div
                                        className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                                        <img
                                            src={`/assets/images/product-img-1.webp`}
                                            alt="product"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <p className="font-medium text-[15px] text-qblack">
                                            iPhone 12 Pro Max 128GB
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center py-4 px-2">
                                <span className="text-[15px] font-normal">Online</span>
                            </td>
                            <td className="text-center py-4 px-2">
                                <div className="flex space-x-1 items-center justify-center">
                                    <span className="text-[15px] font-normal">{utils.formatMoney(38000)}</span>
                                </div>
                            </td>
                            <td className=" py-4">
                                <div className="flex justify-center items-center">
                                    <InputQuantityCom/>
                                </div>
                            </td>
                            <td className="text-right py-4">
                                <div className="flex space-x-1 items-center justify-center">
                                    <span className="text-[15px] font-normal">$38</span>
                                </div>
                            </td>
                            <td className="text-right py-4">
                                <div className="flex space-x-1 items-center justify-center">
                                    <input type="checkbox" className="toggle toggle-warning" checked/>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="pl-10  py-4  w-[380px]">
                                <div className="flex space-x-6 items-center">
                                    <div
                                        className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                                        <img
                                            src={`/assets/images/product-img-3.webp`}
                                            alt="product"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <p className="font-medium text-[15px] text-qblack">
                                            iPhone 12 Pro Max 128GB
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center py-4 px-2">
                                <span className="text-[15px] font-normal">Online</span>
                            </td>
                            <td className="text-center py-4 px-2">
                                <div className="flex space-x-1 items-center justify-center">
                                    <span className="text-[15px] font-normal">$38</span>
                                </div>
                            </td>
                            <td className=" py-4">
                                <div className="flex justify-center items-center">
                                    <InputQuantityCom/>
                                </div>
                            </td>
                            <td className="text-right py-4">
                                <div className="flex space-x-1 items-center justify-center">
                                    <span className="text-[15px] font-normal">$38</span>
                                </div>
                            </td>
                            <td className="text-right py-4">
                                <div className="flex space-x-1 items-center justify-center">
                                    <input type="checkbox" className="toggle toggle-warning" checked/>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="pl-10  py-4  w-[380px]">
                                <div className="flex space-x-6 items-center">
                                    <div
                                        className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                                        <img
                                            src={`/assets/images/product-img-3.webp`}
                                            alt="product"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <p className="font-medium text-[15px] text-qblack">
                                            iPhone 12 Pro Max 128GB
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center py-4 px-2">
                                <span className="text-[15px] font-normal">Online</span>
                            </td>
                            <td className="text-center py-4 px-2">
                                <div className="flex space-x-1 items-center justify-center">
                                    <span className="text-[15px] font-normal">$38</span>
                                </div>
                            </td>
                            <td className=" py-4">
                                <div className="flex justify-center items-center">
                                    <InputQuantityCom/>
                                </div>
                            </td>
                            <td className="text-right py-4">
                                <div className="flex space-x-1 items-center justify-center">
                                    <span className="text-[15px] font-normal">$38</span>
                                </div>
                            </td>
                            <td className="text-right py-4">
                                <div className="flex space-x-1 items-center justify-center">
                                    <input type="checkbox" className="toggle toggle-warning" checked={false}/>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>)
}