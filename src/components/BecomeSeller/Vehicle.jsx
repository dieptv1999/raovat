import {Form, Formik} from "formik";
import * as Yup from "yup";
import countryList from 'react-select-country-list'
import InputCom from "../Helpers/InputCom";
import {useMemo} from "react";
import dynamic from "next/dynamic";

const PostInfo = dynamic(() => import("./PostInfo"), {ssr: false})

const VehicleSchema = Yup.object().shape({
    email:
        Yup.string().email("Email không hợp lệ").required('Bạn cần nhập email để tiếp tục'),
})

export default function Vehicle({
                                    onSubmit = () => {
                                    }
                                }) {
    const options = useMemo(() => countryList().getData(), [])

    return (
        <Formik
            initialValues={{
                email: ""
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
                            <InputCom
                                placeholder="Tình trạng chi tiết của xe"
                                label="Tình trạng"
                                name="fname"
                                type="text"
                                required={true}
                                inputClasses="h-[50px]"
                            />

                            <InputCom
                                placeholder="Hãng xe"
                                label="Hãng"
                                name="lname"
                                type="text"
                                inputClasses="h-[50px]"
                            />
                        </div>
                        <div
                            className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <InputCom
                                placeholder="Đen"
                                label="Màu sắc"
                                name="email"
                                type="email"
                                inputClasses="h-[50px]"
                            />

                            <InputCom
                                placeholder="250"
                                label="Dung lượng"
                                name="phone"
                                type="text"
                                inputClasses="h-[50px]"
                            />
                        </div>

                        <div className="input-item mb-5">
                            <label className="label" htmlFor={'select-origin'}>
                                <span className="label-text">Xuất xứ</span>
                            </label>
                            <select className="select select-bordered" defaultValue={-1} name='origin' id='origin'>
                                <option disabled selected value={-1}>Chọn xuất xứ</option>
                                {options.map(e => (
                                    <option key={e.id} value={e.id}>{e.label}</option>
                                ))}
                            </select>
                        </div>
                        <PostInfo/>
                    </div>
                </Form>
            )}
        />
    )
}