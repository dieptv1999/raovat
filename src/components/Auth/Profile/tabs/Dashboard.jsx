import React from "react";
import {useAuthContext} from "../../../../context/AuthContext";

export default function Dashboard() {
  const {user} = useAuthContext()

  return (
    <>
      <div className="welcome-msg w-full">
        <div>
          <p className="text-qblack text-lg">Xin chào, Shovo</p>
          <h1 className="font-bold text-[24px] text-qblack">
            Chào mừng đến với trang cá nhân của bạn
          </h1>
        </div>
      </div>
      <div className="dashboard-info mt-8 flex justify-between items-center bg-primarygray px-7 py-7">
        <div className="">
          <p className="title text-[22px] font-semibold">
            Thông tin cá nhân
          </p>
          <div className="mt-5">
            <table>
              <tbody>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Name:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  Shuvo khan
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Email:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  rafiqulislamsuvobd@gmail.com
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Phone:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  01792166627
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>City:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  Dhaka,Bangladesh
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Zip:</div>
                </td>
                <td className="text-base text-qblack font-medium">4040</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[1px] h-[164px] bg-[#E4E4E4]"></div>
        <div className="ml-6">
          <p className="title text-[22px] font-semibold">Shop Info</p>
          <div className="mt-5">
            <table>
             <tbody>
             <tr className="inline-flex mb-5">
               <td className="text-base text-qgraytwo w-[100px] block">
                 <div>Name:</div>
               </td>
               <td className="text-base text-qblack font-medium">
                 Shuvo khan
               </td>
             </tr>
             <tr className="inline-flex mb-5">
               <td className="text-base text-qgraytwo w-[100px] block">
                 <div>Email:</div>
               </td>
               <td className="text-base text-qblack font-medium">
                 rafiqulislamsuvobd@gmail.com
               </td>
             </tr>
             <tr className="inline-flex mb-5">
               <td className="text-base text-qgraytwo w-[100px] block">
                 <div>Phone:</div>
               </td>
               <td className="text-base text-qblack font-medium">
                 01792166627
               </td>
             </tr>
             <tr className="inline-flex mb-5">
               <td className="text-base text-qgraytwo w-[100px] block">
                 <div>City:</div>
               </td>
               <td className="text-base text-qblack font-medium">
                 Dhaka,Bangladesh
               </td>
             </tr>
             <tr className="inline-flex mb-5">
               <td className="text-base text-qgraytwo w-[100px] block">
                 <div>Zip:</div>
               </td>
               <td className="text-base text-qblack font-medium">4040</td>
             </tr>
             </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
