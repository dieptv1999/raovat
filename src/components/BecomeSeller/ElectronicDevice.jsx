import {
    CAR_STATUS, ELECTRONIC_CARD, ELECTRONIC_CHIP, ELECTRONIC_COLOR,
    ELECTRONIC_DEVICE,
    ELECTRONIC_DEVICE_STATUS, ELECTRONIC_HARD_DRIVE, ELECTRONIC_RAM, ELECTRONIC_SIZE, ELECTRONIC_STORAGE,
    GEAR_CAR,
    OBJECT_TYPE,
    TYPE_OF_POST,
    VEHICLE_TYPE
} from "../../utils/constant";
import {find, forEach} from "lodash/collection";
import {getIn} from "formik";
import {useEffect, useState} from "react";
import Arrow from "../Helpers/icons/Arrow";
import SelectAddress from "../SelectAddress";
import InputCom from "../Helpers/InputCom";


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
            const brand = find(ELECTRONIC_DEVICE, e => e.name === values.sub_collection)?.brand
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
                            {subBrand && subBrand.length > 0 ? <select
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

                    {/* * --------------------- thông tin chi tiết của car ------------------------ */}
                    <div className="mb-3">Thông tin chi tiết</div>
                    {values.sub_collection === 'Laptop' ? <div className="flex flex-col w-full">
                            <div
                                className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                                <select
                                    value={values.computer_status}
                                    onChange={handleChange}
                                    name={'computer_status'}
                                    className="w-full flex items-center px-4 select select-bordered text-xs">
                                    <option value={'-1'}>
                                        Tình trạng
                                    </option>
                                    {ELECTRONIC_DEVICE_STATUS.map(e => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </select>
                                <select
                                    value={values.computer_processor}
                                    onChange={handleChange}
                                    name={'computer_processor'}
                                    className="w-full flex items-center px-4 select select-bordered text-xs">
                                    <option value={-1}>
                                        Vi xử lý
                                    </option>
                                    {ELECTRONIC_CHIP.map(e => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </select>
                            </div>

                            <div
                                className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                                <select
                                    value={values.computer_ram}
                                    onChange={handleChange}
                                    name={'computer_ram'}
                                    className="w-full flex items-center px-4 select select-bordered text-xs">
                                    <option value={'-1'}>
                                        RAM
                                    </option>
                                    {ELECTRONIC_RAM.map(e => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </select>
                                <select
                                    value={values.computer_disk}
                                    onChange={handleChange}
                                    name={'computer_disk'}
                                    className="w-full flex items-center px-4 select select-bordered text-xs">
                                    <option value={-1}>
                                        Ổ cứng
                                    </option>
                                    {ELECTRONIC_HARD_DRIVE.map(e => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </select>
                            </div>

                            <div
                                className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                                <select
                                    value={values.computer_card}
                                    onChange={handleChange}
                                    name={'computer_card'}
                                    className="w-full flex items-center px-4 select select-bordered text-xs">
                                    <option value={'-1'}>
                                        Card
                                    </option>
                                    {ELECTRONIC_CARD.map(e => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </select>
                                <select
                                    value={values.computer_screen_size}
                                    onChange={handleChange}
                                    name={'computer_screen_size'}
                                    className="w-full flex items-center px-4 select select-bordered text-xs">
                                    <option value={-1}>
                                        Kích thước màn hình
                                    </option>
                                    {ELECTRONIC_SIZE.map(e => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        : values.sub_collection === 'Điện thoại' ? <div className="flex flex-col w-full">
                                <div
                                    className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                                    <select
                                        value={values.mobile_status}
                                        onChange={handleChange}
                                        name={'mobile_status'}
                                        className="w-full flex items-center px-4 select select-bordered text-xs">
                                        <option value={'-1'}>
                                            Tình trạng
                                        </option>
                                        {ELECTRONIC_DEVICE_STATUS.map(e => (
                                            <option key={e} value={e}>{e}</option>
                                        ))}
                                    </select>
                                    <select
                                        value={values.mobile_color}
                                        onChange={handleChange}
                                        name={'mobile_color'}
                                        className="w-full flex items-center px-4 select select-bordered text-xs">
                                        <option value={-1}>
                                            Màu
                                        </option>
                                        {ELECTRONIC_COLOR.map(e => (
                                            <option key={e} value={e}>{e}</option>
                                        ))}
                                    </select>
                                </div>
                                <div
                                    className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                                    <select
                                        value={values.mobile_storage}
                                        onChange={handleChange}
                                        name={'mobile_storage'}
                                        className="w-full flex items-center px-4 select select-bordered text-xs">
                                        <option value={-1}>
                                            Dung lượng
                                        </option>
                                        {ELECTRONIC_STORAGE.map(e => (
                                            <option key={e} value={e}>{e}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            : null}

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
                                     document.getElementById("modal-select-address-4").showModal();
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
                                <option key={e.id} value={e.id}>{e.name}</option>
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
                    setFieldValue(key, val)
                })
            }}/>
        </div>
    )
}