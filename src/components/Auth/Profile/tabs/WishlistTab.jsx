import React, {useCallback, useEffect, useState} from "react";
import InputQuantityCom from "../../../Helpers/InputQuantityCom";
import {useAuthContext} from "../../../../context/AuthContext";
import ApiFactory from "../../../../apis/ApiFactory";
import utils from "../../../../utils";

export default function WishlistTab({ className }) {
  const {user} = useAuthContext()
  const [data, setData] = useState([])

  const fetchData = useCallback(async () => {
    if (!user?.userId) return
    const resp = await ApiFactory.getRequest("UserApi").getListMyFollow({
      user_id: user.userId,
    })
    console.log(resp)
    if (resp && resp.success) {
      setData(resp?.listSell)
    }
  }, [user?.userId])

  const unLike = useCallback(async (postId) => {
    if (!user?.userId) return
    const resp = await ApiFactory.getRequest("UserApi").addFollow({
      user_id: user.userId,
      sell_id: postId,
    })
    if (resp && !resp.success) {
      fetchData()
    }
  }, [fetchData, user?.userId])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <>
      <div className={`w-full ${className || ""}`}>
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
                                            {`${e.address_more ? `${e.address_more}, `: ''}${e.district}, ${e.city}`}
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
      {/*<div className="w-full mt-[30px] flex sm:justify-end justify-start">*/}
      {/*  <div className="sm:flex sm:space-x-[30px] items-center">*/}
      {/*    <button type="button">*/}
      {/*      <div className="w-full text-sm font-semibold text-qred mb-5 sm:mb-0">*/}
      {/*        Xóa tất cả*/}
      {/*      </div>*/}
      {/*    </button>*/}
      {/*    <div className="w-[180px] h-[50px]">*/}
      {/*      <button type="button" className="yellow-btn">*/}
      {/*        <div className="w-full text-sm font-semibold">*/}
      {/*          Thêm tất cả vào giỏ hàng*/}
      {/*        </div>*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
}
