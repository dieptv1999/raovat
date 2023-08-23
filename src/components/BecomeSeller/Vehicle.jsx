import {Form, Formik} from "formik";
import * as Yup from "yup";
import countryList from 'react-select-country-list'
import InputCom from "../Helpers/InputCom";
import {useEffect, useMemo} from "react";
import dynamic from "next/dynamic";
import {CATEGORIES, OBJECT_TYPE, TYPE_OF_POST} from "../../utils/constant";

// const PostInfo = dynamic(() => import("./PostInfo"), {ssr: false})

const VehicleSchema = Yup.object().shape({
    email:
        Yup.string().email("Email không hợp lệ").required('Bạn cần nhập email để tiếp tục'),
})

export default function Vehicle({
                                    onSubmit = () => {
                                    }
                                }) {
    const options = useMemo(() => countryList().getData(), [])

    useEffect(() => {
        console.log("vehicle")
    }, []);

    return (
        <Formik
            initialValues={{
                email: "",
                list: -1,
            }}
            validateOnBlur={true}
            validationSchema={VehicleSchema}
            onSubmit={onSubmit}
            render={({
                         handleChange,
                         values,
                         errors
                     }) => (
                <Form className="flex flex-col">
                    <div className="input-area">
                        <div
                            className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <select
                                value={values.list}
                                onChange={handleChange}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={-1}>
                                    Chọn mục
                                </option>
                                {CATEGORIES.map(e => (
                                    <option key={e.id} value={e.id} >{e.name}</option>
                                ))}
                            </select>
                        </div>
                        <div
                            className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <select
                                value={values.list}
                                onChange={handleChange}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={-1}>
                                    Chọn hãng xe
                                </option>
                                {CATEGORIES.map(e => (
                                    <option key={e.id} value={e.id} >{e.name}</option>
                                ))}
                            </select>
                            <select
                                value={values.list}
                                onChange={handleChange}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={-1}>
                                    Chọn dòng xe
                                </option>
                                {CATEGORIES.map(e => (
                                    <option key={e.id} value={e.id} >{e.name}</option>
                                ))}
                            </select>
                        </div>


                        <div className="mb-3">Thông tin chi tiết</div>
                        <div
                            className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <select
                                value={values.list}
                                onChange={handleChange}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={-1}>
                                    Tình trạng
                                </option>
                                {CATEGORIES.map(e => (
                                    <option key={e.id} value={e.id} >{e.name}</option>
                                ))}
                            </select>
                            <select
                                value={values.list}
                                onChange={handleChange}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={-1}>
                                    Hộp số
                                </option>
                                {CATEGORIES.map(e => (
                                    <option key={e.id} value={e.id} >{e.name}</option>
                                ))}
                            </select>
                        </div>
                        <div
                            className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <select
                                value={values.list}
                                onChange={handleChange}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={-1}>
                                    Nhiên liệu
                                </option>
                                {CATEGORIES.map(e => (
                                    <option key={e.id} value={e.id} >{e.name}</option>
                                ))}
                            </select>
                            <select
                                value={values.list}
                                onChange={handleChange}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={-1}>
                                    Nguồn gốc
                                </option>
                                {CATEGORIES.map(e => (
                                    <option key={e.id} value={e.id} >{e.name}</option>
                                ))}
                            </select>
                        </div>
                        <div
                            className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <select
                                value={values.list}
                                onChange={handleChange}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={-1}>
                                    Kiểu dáng
                                </option>
                                {CATEGORIES.map(e => (
                                    <option key={e.id} value={e.id} >{e.name}</option>
                                ))}
                            </select>
                            <select
                                value={values.list}
                                onChange={handleChange}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={-1}>
                                    Số chỗ ngồi
                                </option>
                                {CATEGORIES.map(e => (
                                    <option key={e.id} value={e.id} >{e.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* ------------------------------------- end info detail ---------------------------------- */}
                        <div
                            className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <select
                                value={values.list}
                                onChange={handleChange}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={-1}>
                                    Loại tin đăng
                                </option>
                                {TYPE_OF_POST.map(e => (
                                    <option key={e.id} value={e.id} >{e.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* --------------- mô tả thông tin -------------------------------------*/}
                        <div className="mb-3">Mô tả thông tin</div>
                        <select
                            value={values.list}
                            onChange={handleChange}
                            className="w-full flex items-center px-4 select select-bordered text-xs mb-3">
                            <option value={-1}>
                                Loại
                            </option>
                            {OBJECT_TYPE.map(e => (
                                <option key={e.id} value={e.id} >{e.name}</option>
                            ))}
                        </select>
                        <div
                            className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <InputCom
                                placeholder="Giá của xe"
                                label="Giá"
                                name="price"
                                type="text"
                                required={true}
                                inputClasses="h-[50px]"
                            />

                            <InputCom
                                placeholder="Người liên hệ"
                                label="Người liên hệ"
                                name="lname"
                                type="text"
                                inputClasses="h-[50px]"
                            />
                        </div>
                        <div
                            className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <InputCom
                                placeholder="0 333 333 333"
                                label="Số điện thoại"
                                name="phone"
                                type="phone"
                                inputClasses="h-[50px]"
                            />

                            <InputCom
                                placeholder="Cần bán/ mua xe..."
                                label="Tiêu đề"
                                name="title"
                                type="text"
                                inputClasses="h-[50px]"
                            />
                        </div>
                        {/*<PostInfo/>*/}
                    </div>
                </Form>
            )}
        />
    )
}