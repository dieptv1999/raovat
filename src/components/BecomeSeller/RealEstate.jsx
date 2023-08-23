import {Form, Formik, useFormik} from "formik";
import * as Yup from "yup";
import countryList from 'react-select-country-list'
import InputCom from "../Helpers/InputCom";
import {useEffect, useMemo} from "react";
import dynamic from "next/dynamic";
import {CATEGORIES, OBJECT_TYPE, POSITION_HOUSE, REAL_ESTATE_TYPE, TYPE_OF_POST} from "../../utils/constant";
import Arrow from "../Helpers/icons/Arrow";
import SelectAddress from "../SelectAddress";

// Bất động sản
export default function RealEstate({
                                       onSubmit = () => {
                                       },
                                       formik,
                                   }) {
    const options = useMemo(() => countryList().getData(), [])

    useEffect(() => {
        console.log("RealEstate")
    }, []);

    const {
        handleChange,
        values,
        errors,
        setFieldValue,
    } = formik;

    return (
        <div>
            <form className="flex flex-col" onSubmit={formik.handleSubmit}>
                <div className="input-area">
                    <div
                        className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                        <select
                            value={values.sub_collection}
                            onChange={handleChange}
                            name={'sub_collection'}
                            className="w-full flex items-center px-4 select select-bordered text-xs">
                            <option value={'-1'}>
                                Chọn mục
                            </option>
                            {REAL_ESTATE_TYPE.map(e => (
                                <option key={e.id} value={e.id}>{e.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* ------------------------------------- end info detail ---------------------------------- */}
                    <div
                        className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                        <select
                            value={values.type}
                            onChange={handleChange}
                            name={'type'}
                            className="w-full flex items-center px-4 select select-bordered text-xs">
                            <option value={''}>
                                Loại tin đăng
                            </option>
                            {TYPE_OF_POST.map(e => (
                                <option key={e.id} value={e.value}>{e.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* --------------- mô tả thông tin -------------------------------------*/}
                    <div className="mb-3">Mô tả thông tin</div>
                    <div className="mb-5">
                        <div
                            className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">Địa
                            chỉ bất động sản <span className="text-red-500">(*)</span></div>
                        <div className="text-sm text-gray-400 border border-gray-300
                                            rounded-lg px-6 py-2 cursor-pointer active:opacity-70 flex items-center justify-between"
                             onClick={() => {
                                 if (document) {
                                     document.getElementById("modal-select-address-2").showModal();
                                 }
                             }}>
                            <div>{values.city ? values.city : 'Địa chỉ cụ thế'}</div>
                            <div>
                                <Arrow
                                    width="5.78538"
                                    height="1.28564"
                                    className="fill-current text-qblacktext"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                        <InputCom
                            placeholder="Giá bất động sản"
                            label="Giá"
                            name="price"
                            type="number"
                            minValue={0}
                            required={true}
                            inputClasses="h-[50px]"
                            error={errors.price}
                            inputHandler={handleChange}
                            value={values.price}
                        />
                    </div>
                    <div
                        className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                        <InputCom
                            placeholder="200m2"
                            label="Diện tích"
                            name="area"
                            type="text"
                            required={true}
                            inputClasses="h-[50px]"
                            inputHandler={handleChange}
                            value={values.area}
                        />

                        <InputCom
                            placeholder="3.8"
                            label="Mặt tiền"
                            name="lname"
                            type="text"
                            required={true}
                            inputClasses="h-[50px]"
                            inputHandler={handleChange}
                            value={values.prev}
                        />
                    </div>
                    <div
                        className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                        <InputCom
                            placeholder="3.8"
                            label="Đường vào"
                            name="area"
                            type="text"
                            required={true}
                            inputClasses="h-[50px]"
                            inputHandler={handleChange}
                        />

                        <InputCom
                            placeholder="3"
                            label="Số phòng ngủ"
                            name="lname"
                            type="text"
                            required={true}
                            inputClasses="h-[50px]"
                            inputHandler={handleChange}
                        />
                    </div>


                    <div
                        className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                        <select
                            value={values.list}
                            onChange={handleChange}
                            name={'type'}
                            className="w-full flex items-center px-4 select select-bordered text-xs mb-3">
                            <option value={-1}>
                                Hướng nhà, hướng ban công
                            </option>
                            {POSITION_HOUSE.map(e => (
                                <option key={e.id} value={e.id}>{e.name}</option>
                            ))}
                        </select>
                        <select
                            value={values.list}
                            onChange={handleChange}
                            className="w-full flex items-center px-4 select select-bordered text-xs mb-3">
                            <option value={-1}>
                                Loại
                            </option>
                            {OBJECT_TYPE.map(e => (
                                <option key={e.id} value={e.id}>{e.name}</option>
                            ))}
                        </select>
                    </div>


                    <div
                        className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">

                        <InputCom
                            placeholder="Cần bán/ mua xe..."
                            label="Tiêu đề"
                            name="title"
                            type="text"
                            required={true}
                            inputClasses="h-[50px]"
                            inputHandler={handleChange}
                            value={values.title}
                        />
                    </div>
                    <div
                        className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <textarea
                                name={'des'}
                                className="textarea textarea-bordered w-full"
                                placeholder={'Mô tả'}
                                onChange={handleChange}
                                value={values.des}
                            >

                            </textarea>
                    </div>
                    {/*<PostInfo/>*/}
                </div>
            </form>
            <SelectAddress id={'modal-select-address-2'} onSubmitAddress={addr => {
                console.log(addr)
                setFieldValue('city', addr)
            }}/>
        </div>
    )
}