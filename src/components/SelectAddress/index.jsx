import {CATEGORIES, NEXT_URL} from "../../utils/constant";
import InputCom from "../Helpers/InputCom";
import {useEffect, useState} from "react";
import axios from "axios";
import {useFormik} from "formik";
import * as Yup from "yup";
import {find} from "lodash/collection";

const AddressSchema = Yup.object().shape({
    province:
        Yup.string().notOneOf([
            Yup.ref('-1')
        ], '').required('Bạn cần nhập tỉnh/ thành phố để tiếp tục'),
    district: Yup.string().notOneOf([
        Yup.ref('-1')
    ], '').required('Bạn cần nhập quận/ huyện để tiếp tục'),
    address: Yup.string().required('Bạn cần nhập địa chỉ chi tiết để tiếp tục'),
})

export default function SelectAddress({
                                          id = "modal-select-address-default",
                                          className = "",
                                          onSubmitAddress = (address) => {
                                          }
                                      }) {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);

    const formik = useFormik({
        initialValues: {
            province: '',
            district: '',
            address: '',
        },
        validationSchema: AddressSchema,
        onSubmit: values => {
            const provinceName = find(provinces, e => e.code === values.province)?.name_with_type;
            const districtName = find(districts, e => e.code === values.district)?.name_with_type;
            onSubmitAddress({
                city: provinceName,
                district: districtName,
                address_more: values.address,
            })
            document.getElementById(`${id}-btn`).click();
        },
    });

    function searchDistrict(code) {
        axios.get(NEXT_URL + '/api/address/district?code=' + code)
            .then((resp) => {
                setDistricts(resp.data)
            })
    }

    useEffect(() => {
        axios.get(NEXT_URL + '/api/address/province')
            .then((resp) => {
                setProvinces(resp.data)
            })
    }, [])

    return (
        <dialog id={id} className={`modal ${className}`}>
            <form method="dialog" className="modal-box" onSubmit={formik.handleSubmit}>
                <h3 className="font-bold text-lg mb-4">Địa chỉ</h3>
                <div className="bg-white flex flex-col items-center space-y-2">
                    <select
                        defaultValue={'-1'}
                        name={'city'}
                        onChange={e => {
                            searchDistrict(e.target.value)
                            formik.setFieldValue('province', e.target.value)
                        }}
                        className="w-full flex items-center select select-bordered text-xs"
                        style={{outline: 'none'}}>
                        <option selected value={'-1'}>
                            Tỉnh, thành phố
                        </option>
                        {provinces.map(e => (
                            <option key={e.code} value={e.code}>{e.name}</option>
                        ))}
                    </select>
                    <select
                        className="w-full flex items-center select select-bordered text-xs"
                        onChange={e => {
                            formik.setFieldValue('district', e.target.value)
                        }}
                        defaultValue={'-1'}
                        style={{outline: 'none'}}
                    >
                        <option selected value={'-1'}>
                            Quận, huyện, thị xã
                        </option>
                        {districts.map(e => (
                            <option key={e.code} value={e.code}>{e.name}</option>
                        ))}
                    </select>
                    {/*<select*/}
                    {/*    className="w-full flex items-center select select-bordered text-xs"*/}
                    {/*    style={{outline: 'none'}}>*/}
                    {/*  <option selected value={-1}>*/}
                    {/*    Phường, xã, thị trấn*/}
                    {/*  </option>*/}
                    {/*  {CATEGORIES.map(e => (*/}
                    {/*      <option key={e.id} value={e.id}>{e.name}</option>*/}
                    {/*  ))}*/}
                    {/*</select>*/}
                    <InputCom
                        placeholder="Số 1 ngõ A"
                        label="Địa chỉ cụ thể"
                        name="address"
                        type="text"
                        inputHandler={formik.handleChange}
                        required={true}
                        value={formik.values.address}
                        inputClasses="py-3"
                        error={formik.errors.address}
                    />
                </div>
                <button
                    type="submit"
                    disabled={!formik.isValid}
                    className="text-sm text-white w-full mt-3 h-[50px] font-semibold flex justify-center items-center btn btn-neutral"
                >
                    <span>Xong</span>
                </button>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button id={`${id}-btn`} >close</button>
            </form>
        </dialog>
    )
}