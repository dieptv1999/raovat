import {ELECTRONIC_DEVICE, VEHICLE_TYPE} from "../../utils/constant";
import {find} from "lodash/collection";
import {getIn} from "formik";
import {useEffect, useState} from "react";


export default function ElectronicDevice({
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
            return find(ELECTRONIC_DEVICE, e => e.name === values.sub_collection)?.brand
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
                            {ELECTRONIC_DEVICE.map(e => (
                                <option key={e.name} value={e.name}>{e.name}</option>
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
                                    Chọn hãng điện tử
                                </option>
                                {getBrand().map(e => (
                                    <option key={e.name} value={e.name}>{e.name}</option>
                                ))}
                            </select>
                            {subBrand ? <select
                                    value={values.model}
                                    onChange={handleChange}
                                    name={'model'}
                                    className="w-full flex items-center px-4 select select-bordered text-xs">
                                    <option value={'-1'}>
                                        Chọn dòng máy
                                    </option>
                                    {subBrand.map(e => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </select>
                                : null}
                        </div>
                        : null
                    }
                </div>
            </form>
        </div>
    )
}