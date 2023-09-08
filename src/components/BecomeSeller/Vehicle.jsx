import {Form, Formik, getIn} from "formik";
import countryList from 'react-select-country-list'
import InputCom from "../Helpers/InputCom";
import {useEffect, useMemo, useState} from "react";
import {
    CAPACITY_MOTOR_BIKE,
    CAR_STATUS,
    CATEGORIES, FUEL_CAR,
    GEAR_CAR,
    OBJECT_TYPE, SLOT_CAR, SOURCE_CAR, STYLE_CAR, STYLE_MOTOR_BIKE,
    TYPE_OF_POST,
    VEHICLE_BRAND_CAR,
    VEHICLE_TYPE
} from "../../utils/constant";
import {find, forEach} from "lodash/collection";
import Arrow from "../Helpers/icons/Arrow";
import SelectAddress from "../SelectAddress";

export default function Vehicle({
                                    onSubmit = () => {
                                    },
                                    formik,
                                }) {
    const options = useMemo(() => countryList().getData(), [])
    // * dòng xe
    const [vehicles, setVehicles] = useState([])

    const {
        handleChange,
        values,
        errors,
        setFieldValue,
        handleSubmit
    } = formik;

    const getBrand = () => {
        if (values.sub_collection && values.sub_collection !== -1) {
            return find(VEHICLE_TYPE, e => e.name === values.sub_collection)?.brand
        } else return null
    }

    const brand = getIn(values, 'brand')

    useEffect(() => {
        const brands = getBrand()

        if (brand && brand !== -1) {
            setVehicles(find(brands, e => e.name === brand)?.brand)
        } else return setVehicles(null)
    }, [brand]);

    return (
        <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
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
                            {VEHICLE_TYPE.map(e => (
                                <option key={e.id} value={e.name}>{e.name}</option>
                            ))}
                        </select>
                    </div>
                    {getBrand() ? <div
                            className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <select
                                value={values.brand}
                                onChange={handleChange}
                                name={'brand'}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={-1}>
                                    Chọn hãng xe
                                </option>
                                {getBrand().map(e => (
                                    <option key={e.name} value={e.name}>{e.name}</option>
                                ))}
                            </select>
                            {vehicles && vehicles.length > 0 ? <select
                                    value={values.model}
                                    onChange={handleChange}
                                    name={'model'}
                                    className="w-full flex items-center px-4 select select-bordered text-xs">
                                    <option value={'-1'}>
                                        Chọn dòng xe
                                    </option>
                                    {vehicles.map(e => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </select>
                                : null}
                        </div>
                        : null
                    }

                    {/* * --------------------- thông tin chi tiết của car ------------------------ */}
                    {values.sub_collection === 'Ô tô'
                        || values.sub_collection === 'Xe máy'? <div className="mb-3">Thông tin chi tiết</div> : null}
                    {values.sub_collection === 'Ô tô' ? <div className="flex flex-col w-full">
                        <div
                            className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <select
                                value={values.car_status}
                                onChange={handleChange}
                                name={'car_status'}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={'-1'}>
                                    Tình trạng
                                </option>
                                {CAR_STATUS.map(e => (
                                    <option key={e} value={e}>{e}</option>
                                ))}
                            </select>
                            <select
                                value={values.gear_car}
                                onChange={handleChange}
                                name={'gear_car'}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={-1}>
                                    Hộp số
                                </option>
                                {GEAR_CAR.map(e => (
                                    <option key={e} value={e}>{e}</option>
                                ))}
                            </select>
                        </div>
                        <div
                            className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <select
                                value={values.fuel_car}
                                onChange={handleChange}
                                name={'fuel_car'}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={'-1'}>
                                    Nhiên liệu
                                </option>
                                {FUEL_CAR.map(e => (
                                    <option key={e} value={e}>{e}</option>
                                ))}
                            </select>
                            <select
                                value={values.source_car}
                                onChange={handleChange}
                                name={'source_car'}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={'-1'}>
                                    Nguồn gốc
                                </option>
                                {SOURCE_CAR.map(e => (
                                    <option key={e} value={e}>{e}</option>
                                ))}
                            </select>
                        </div>
                        <div
                            className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <select
                                value={values.style_car}
                                onChange={handleChange}
                                name={'style_car'}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={'-1'}>
                                    Kiểu dáng
                                </option>
                                {STYLE_CAR.map(e => (
                                    <option key={e} value={e}>{e}</option>
                                ))}
                            </select>
                            <select
                                value={values.slot_car}
                                onChange={handleChange}
                                name={'slot_car'}
                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                <option value={'-1'}>
                                    Số chỗ ngồi
                                </option>
                                {SLOT_CAR.map(e => (
                                    <option key={e} value={e}>{e}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    : values.sub_collection === 'Xe máy' ?
                            <div className="flex flex-col w-full">
                                <div
                                    className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                                    <select
                                        value={values.car_status}
                                        onChange={handleChange}
                                        name={'car_status'}
                                        className="w-full flex items-center px-4 select select-bordered text-xs">
                                        <option value={'-1'}>
                                            Tình trạng
                                        </option>
                                        {CAR_STATUS.map(e => (
                                            <option key={e} value={e}>{e}</option>
                                        ))}
                                    </select>
                                    <select
                                        value={values.fuel_car}
                                        onChange={handleChange}
                                        name={'fuel_car'}
                                        className="w-full flex items-center px-4 select select-bordered text-xs">
                                        <option value={'-1'}>
                                            Dung tích
                                        </option>
                                        {CAPACITY_MOTOR_BIKE.map(e => (
                                            <option key={e} value={e}>{e}</option>
                                        ))}
                                    </select>
                                </div>
                                <div
                                    className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                                    <select
                                        value={values.style_car}
                                        onChange={handleChange}
                                        name={'style_car'}
                                        className="w-full flex items-center px-4 select select-bordered text-xs">
                                        <option value={'-1'}>
                                            Kiểu xe
                                        </option>
                                        {STYLE_MOTOR_BIKE.map(e => (
                                            <option key={e} value={e}>{e}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                    : null}

                    {/* ------------------------------------- end info detail ---------------------------------- */}

                    {/* --------------- mô tả thông tin -------------------------------------*/}
                    <div className="mb-3">Mô tả thông tin</div>
                    <div className="mb-5">
                        <div
                            className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">Địa
                            chỉ chi tiết <span className="text-red-500">(*)</span></div>
                        <div className="text-sm text-gray-400 border border-gray-300
                                            rounded-lg px-6 py-2 cursor-pointer active:opacity-70 flex items-center justify-between"
                             onClick={() => {
                                 if (document) {
                                     document.getElementById("modal-select-address-3").showModal();
                                 }
                             }}>
                            <div>{values.city ? `${values.address_more}, ${values.district}, ${values.city}` : 'Địa chỉ cụ thế'}</div>
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
                        <select
                            value={values.type}
                            onChange={handleChange}
                            name={'type'}
                            className="w-full flex items-center px-4 select select-bordered text-xs">
                            <option value={-1}>
                                Loại tin đăng
                            </option>
                            {TYPE_OF_POST.map(e => (
                                <option key={e.id} value={e.name}>{e.name}</option>
                            ))}
                        </select>
                    </div>
                    <select
                        value={values.sell_type}
                        onChange={handleChange}
                        name={'sell_type'}
                        className="w-full flex items-center px-4 select select-bordered text-xs mb-3">
                        <option value={null}>
                            Loại
                        </option>
                        {OBJECT_TYPE.map(e => (
                            <option key={e.id} value={e.name}>{e.name}</option>
                        ))}
                    </select>
                    <div
                        className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                        <InputCom
                            placeholder="Giá của xe"
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
                        <InputCom
                            placeholder="Cần bán/ mua..."
                            label="Tiêu đề"
                            name="title"
                            type="text"
                            required={true}
                            inputClasses="h-[50px]"
                            inputHandler={handleChange}
                            value={values.title}
                            error={errors.title}
                        />
                    </div>
                    <div
                        className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                        <InputCom
                            name={'des'}
                            inputHandler={handleChange}
                            placeholder={'Mô tả'}
                            label="Mô tả chi tiết"
                            inputClasses="min-h-[100px]"
                            required={true}
                            onChange={handleChange}
                            value={values.des}
                            error={errors.des}
                            inputType={'textarea'}
                        >

                        </InputCom>
                    </div>
                </div>
            </form>
            <SelectAddress id={'modal-select-address-3'} onSubmitAddress={addr => {
                forEach(addr, (val, key) => {
                    console.log(key, val)
                    setFieldValue(key, val)
                })
            }}/>
        </div>
    )
}