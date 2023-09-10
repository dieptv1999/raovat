import {
    OBJECT_TYPE, SPORT_ENTERTAINMENT_TYPE,
    TYPE_OF_POST,
} from "../../utils/constant";
import {find, forEach} from "lodash/collection";
import {getIn} from "formik";
import {useEffect, useState} from "react";
import Arrow from "../Helpers/icons/Arrow";
import SelectAddress from "../SelectAddress";
import InputCom from "../Helpers/InputCom";


export default function SportAndEntertainment({
                                          onSubmit = () => {
                                          },
                                          formik,
                                      }) {
    const [subBrand, setSubBrand] = useState([])
    const {
        handleChange,
        values,
        errors,
        setFieldValue,
        handleSubmit
    } = formik;

    const getBrand = () => {
        if (values.sub_collection && values.sub_collection !== -1) {
            const brand = find(SPORT_ENTERTAINMENT_TYPE, e => e.name === values.sub_collection)?.brand
            return brand && brand.length > 0 ? brand : null
        } else return null
    }

    const brand = getIn(values, 'brand')

    useEffect(() => {
        const brands = getBrand()

        if (brand && brand !== -1) {
            setSubBrand(find(brands, e => e.name === brand)?.brand)
        } else return setSubBrand(null)
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
                            {SPORT_ENTERTAINMENT_TYPE.map(e => (
                                <option key={e.name} value={e.name}>{e.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* * --------------- mô tả thông tin -------------------------------------*/}
                    <div className="mb-3">Mô tả thông tin</div>
                    <div className="mb-5">
                        <div
                            className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">Địa
                            chỉ chi tiết <span className="text-red-500">(*)</span></div>
                        <div className="text-sm text-gray-400 border border-gray-300
                                            rounded-lg px-6 py-2 cursor-pointer active:opacity-70 flex items-center justify-between"
                             onClick={() => {
                                 if (document) {
                                     document.getElementById("modal-select-address-12").showModal();
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
                        <option value={'-1'}>
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

            <SelectAddress id={'modal-select-address-12'} onSubmitAddress={addr => {
                forEach(addr, (val, key) => {
                    setFieldValue(key, val)
                })
            }}/>
        </div>
    )
}