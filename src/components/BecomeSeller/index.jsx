import {useRef, useState} from "react";
import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import {CATEGORIES, DEFAULT_VAL_SELL, SESSION} from "../../utils/constant";
import Arrow from "../Helpers/icons/Arrow";
import SelectAddress from "../SelectAddress";
import dynamic from "next/dynamic";
import Vehicle from "./Vehicle";
import RealEstate from "./RealEstate";
import {useFormik} from "formik";
import * as Yup from "yup";
import ApiFactory from "../../apis/ApiFactory";
import {find, forEach, reduce} from "lodash/collection";
import utils from "../../utils";
import {useAuthContext} from "../../context/AuthContext";
import ElectronicDevice from "./ElectronicDevice";
import PostJob from "./PostJob";
import Tourism from "./Tourism";
import Infant from "./Infant";
import Pet from "./Pet";
import Food from "./Food";
import RefrigeratorAndAirConditioner from "./RefrigeratorAndAirConditioner";
import HouseholdGood from "./HouseholdGood";
import SportAndEntertainment from "./SportAndEntertainment";
import Fashion from "./Fashion";
import TicketAndGift from "./TicketAndGift";
import {router} from "next/client";

const DropZone = dynamic(() => import("../DropZone").then(e => e.DropZone), {ssr: false})

const userSchema = Yup.object().shape({
    contact_name:
        Yup.string().required('Bạn cần nhập tên người dùng để tiếp tục'),
    contact_phone: Yup.string()
        .min(10, 'Số điện thoại không hợp lệ')
        .max(10, 'Số điện thoại không hợp lệ')
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, {message: 'Số điện thoại sai định dạng'})
        .required('Số điện thoại là bắt buộc'),
    // city: Yup.string().required('Bạn cần nhập địa chỉ đề tiếp tục'),
})

const RealEstateSchema = Yup.object().shape({
    price:
        Yup.number().min(0, 'Giá không thể là số âm').required('Bạn cần nhập giá để tiếp tục'),
    type: Yup.string().required('Vui lòng chọn loại bài viết'),
    sub_collection: Yup.string().required().notOneOf([Yup.ref('-1')]),
    des: Yup.string().required('Nhập mô tả chi tiết để tiếp tục'),
    title: Yup.string().min(6, 'Tiêu đề quá ngắn').required('Tiêu đề là bắt buộc'),
    city: Yup.string().required('Bạn cần nhập tỉnh/ thành phố đề tiếp tục'),
    district: Yup.string().required('Bạn cần nhập quận/ huyện đề tiếp tục'),
    address_more: Yup.string().required('Bạn cần nhập địa chỉ chi tiết đề tiếp tục'),
})

const VehicleSchema = Yup.object().shape({
    price:
        Yup.number().min(0, 'Giá không thể là số âm').required('Bạn cần nhập giá để tiếp tục'),
    type: Yup.string().required('Vui lòng chọn loại bài viết'),
    sub_collection: Yup.string().required().notOneOf([Yup.ref('-1')]),
    des: Yup.string().required('Nhập mô tả chi tiết để tiếp tục'),
    title: Yup.string().min(6, 'Tiêu đề quá ngắn').required('Tiêu đề là bắt buộc'),
    brand: Yup.string().notOneOf([Yup.ref('-1')]),
    model: Yup.string().notOneOf([Yup.ref('-1')]),
    city: Yup.string().required('Bạn cần nhập tỉnh/ thành phố đề tiếp tục'),
    district: Yup.string().required('Bạn cần nhập quận/ huyện đề tiếp tục'),
    address_more: Yup.string().required('Bạn cần nhập địa chỉ chi tiết đề tiếp tục'),
})

const ElectronicSchema = Yup.object().shape({
    price:
        Yup.number().min(0, 'Giá không thể là số âm').required('Bạn cần nhập giá để tiếp tục'),
    type: Yup.string().required('Vui lòng chọn loại bài viết'),
    des: Yup.string().required('Nhập mô tả chi tiết để tiếp tục'),
    title: Yup.string().min(6, 'Tiêu đề quá ngắn').required('Tiêu đề là bắt buộc'),
    sub_collection: Yup.string().required().notOneOf([Yup.ref('-1')]),
    brand: Yup.string().notOneOf([Yup.ref('-1')]),
    model: Yup.string().notOneOf([Yup.ref('-1')]),
    city: Yup.string().required('Bạn cần nhập tỉnh/ thành phố đề tiếp tục'),
    district: Yup.string().required('Bạn cần nhập quận/ huyện đề tiếp tục'),
    address_more: Yup.string().required('Bạn cần nhập địa chỉ chi tiết đề tiếp tục'),
})

const JobSchema = Yup.object().shape({
    price:
        Yup.number().min(0, 'Giá không thể là số âm').required('Bạn cần nhập giá để tiếp tục'),
    type: Yup.string().required('Vui lòng chọn loại bài viết'),
    des: Yup.string().required('Nhập mô tả chi tiết để tiếp tục'),
    title: Yup.string().min(6, 'Tiêu đề quá ngắn').required('Tiêu đề là bắt buộc'),
    sub_collection: Yup.string().required().notOneOf([Yup.ref('-1')]),
    city: Yup.string().required('Bạn cần nhập tỉnh/ thành phố đề tiếp tục'),
    district: Yup.string().required('Bạn cần nhập quận/ huyện đề tiếp tục'),
    address_more: Yup.string().required('Bạn cần nhập địa chỉ chi tiết đề tiếp tục'),
})

const TourismSchema = Yup.object().shape({
    price:
        Yup.number().min(0, 'Giá không thể là số âm').required('Bạn cần nhập giá để tiếp tục'),
    type: Yup.string().required('Vui lòng chọn loại bài viết'),
    des: Yup.string().required('Nhập mô tả chi tiết để tiếp tục'),
    title: Yup.string().min(6, 'Tiêu đề quá ngắn').required('Tiêu đề là bắt buộc'),
    sub_collection: Yup.string().required().notOneOf([Yup.ref('-1')]),
    city: Yup.string().required('Bạn cần nhập tỉnh/ thành phố đề tiếp tục'),
    district: Yup.string().required('Bạn cần nhập quận/ huyện đề tiếp tục'),
    address_more: Yup.string().required('Bạn cần nhập địa chỉ chi tiết đề tiếp tục'),
})

const InfantSchema = Yup.object().shape({
    price:
        Yup.number().min(0, 'Giá không thể là số âm').required('Bạn cần nhập giá để tiếp tục'),
    type: Yup.string().required('Vui lòng chọn loại bài viết'),
    sell_type: Yup.string().required('Vui lòng chọn loại bài viết').notOneOf([Yup.ref('-1')]),
    des: Yup.string().required('Nhập mô tả chi tiết để tiếp tục'),
    title: Yup.string().min(6, 'Tiêu đề quá ngắn').required('Tiêu đề là bắt buộc'),
    sub_collection: Yup.string().required().notOneOf([Yup.ref('-1')]),
    city: Yup.string().required('Bạn cần nhập tỉnh/ thành phố đề tiếp tục'),
    district: Yup.string().required('Bạn cần nhập quận/ huyện đề tiếp tục'),
    address_more: Yup.string().required('Bạn cần nhập địa chỉ chi tiết đề tiếp tục'),
})

export default function BecomeSeller({}) {
    const {user} = useAuthContext()
    const [category, setCategory] = useState('-1');
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState([]);

    const userFormik = useFormik({
        initialValues: {
            contact_name: '',
            contact_phone: '',
        },
        validationSchema: userSchema,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    const realEstateFormik = useFormik({
        initialValues: {
            title: "",
            des: '',
            city: '',
            sub_collection: '',
            type: '',
            price: '',
            orientation: '',
            district: '',
            address_more: '',
            size: '',
            sell_type: '',
        },
        validateOnBlur: true,
        validationSchema: RealEstateSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    const vehicleFormik = useFormik({
        initialValues: {
            sub_collection: '',
            brand: '',
            model: '',
            car_status: 'Tất cả',
            gear_car: 'Tất cả',
            slot_car: 'Tất cả',
            style_car: 'Tất cả',
            fuel_car: 'Tất cả',
            source_car: 'Tất cả',
            type: '',
            price: '',
            sell_type: '',
            title: '',
            des: '',
            city: '',
            district: '',
            address_more: '',
        },
        validateOnBlur: true,
        validationSchema: VehicleSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    const electronicFormik = useFormik({
        initialValues: {
            sub_collection: '',
            brand: '',
            model: '',
            computer_status: '',
            computer_ram: '',
            computer_processor: '',
            computer_screen_size: '',
            computer_card: '',
            computer_disk: '',
            type: '',
            price: '',
            sell_type: '',
            title: '',
            des: '',
            city: '',
            district: '',
            address_more: '',
        },
        validateOnBlur: true,
        validationSchema: ElectronicSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    const jobFormik = useFormik({
        initialValues: {
            sub_collection: '',
            type: '',
            price: '',
            sell_type: '',
            title: '',
            des: '',
            city: '',
            district: '',
            address_more: '',
        },
        validateOnBlur: true,
        validationSchema: JobSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    const tourismFormik = useFormik({
        initialValues: {
            sub_collection: '',
            type: '',
            price: '',
            sell_type: '',
            title: '',
            des: '',
            city: '',
            district: '',
            address_more: '',
        },
        validateOnBlur: true,
        validationSchema: TourismSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    const infantFormik = useFormik({
        initialValues: {
            sub_collection: '',
            type: '',
            price: '',
            sell_type: '',
            title: '',
            des: '',
            city: '',
            district: '',
            address_more: '',
        },
        validateOnBlur: true,
        validationSchema: InfantSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    const petFormik = useFormik({
        initialValues: {
            sub_collection: '',
            type: '',
            price: '',
            sell_type: '',
            title: '',
            des: '',
            city: '',
            district: '',
            address_more: '',
        },
        validateOnBlur: true,
        validationSchema: InfantSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    const foodFormik = useFormik({
        initialValues: {
            sub_collection: '',
            type: '',
            price: '',
            sell_type: '',
            title: '',
            des: '',
            city: '',
            district: '',
            address_more: '',
        },
        validateOnBlur: true,
        validationSchema: InfantSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    const refrigeratorAndAirConditionerFormik = useFormik({
        initialValues: {
            sub_collection: '',
            type: '',
            price: '',
            sell_type: '',
            title: '',
            des: '',
            city: '',
            district: '',
            address_more: '',
        },
        validateOnBlur: true,
        validationSchema: InfantSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    const householdGoodFormik = useFormik({
        initialValues: {
            sub_collection: '',
            type: '',
            price: '',
            sell_type: '',
            title: '',
            des: '',
            city: '',
            district: '',
            address_more: '',
        },
        validateOnBlur: true,
        validationSchema: InfantSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    const sportAndEntertainmentFormik = useFormik({
        initialValues: {
            sub_collection: '',
            type: '',
            price: '',
            sell_type: '',
            title: '',
            des: '',
            city: '',
            district: '',
            address_more: '',
        },
        validateOnBlur: true,
        validationSchema: InfantSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    const fashionFormik = useFormik({
        initialValues: {
            sub_collection: '',
            type: '',
            price: '',
            sell_type: '',
            title: '',
            des: '',
            city: '',
            district: '',
            address_more: '',
        },
        validateOnBlur: true,
        validationSchema: InfantSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    const ticketFormik = useFormik({
        initialValues: {
            sub_collection: '',
            type: '',
            price: '',
            sell_type: '',
            title: '',
            des: '',
            city: '',
            district: '',
            address_more: '',
        },
        validateOnBlur: true,
        validationSchema: InfantSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    function renderBody() {
        if (category === "1") return <Vehicle onSubmit={(values) => {
        }} formik={vehicleFormik}/>
        if (category === "2") return <RealEstate onSubmit={(values) => {
        }} formik={realEstateFormik}/>
        if (category === "3") return <ElectronicDevice onSubmit={(values) => {
        }} formik={electronicFormik}/>
        if (category === "4") return  <PostJob onSubmit={(values) => {
        }} formik={jobFormik}/>
        if (category === "5") return  <Tourism onSubmit={(values) => {
        }} formik={tourismFormik}/>
        if (category === "6") return  <Infant onSubmit={(values) => {
        }} formik={infantFormik}/>
        if (category === "7") return  <Pet onSubmit={(values) => {
        }} formik={petFormik}/>
        if (category === "8") return  <Food onSubmit={(values) => {
        }} formik={foodFormik}/>
        if (category === "9") return  <RefrigeratorAndAirConditioner onSubmit={(values) => {
        }} formik={refrigeratorAndAirConditionerFormik}/>
        if (category === "10") return  <HouseholdGood onSubmit={(values) => {
        }} formik={householdGoodFormik}/>
        if (category === "11") return  <SportAndEntertainment onSubmit={(values) => {
        }} formik={sportAndEntertainmentFormik}/>
        if (category === "12") return  <Fashion onSubmit={(values) => {
        }} formik={fashionFormik}/>
        if (category === "13") return  <TicketAndGift onSubmit={(values) => {
        }} formik={ticketFormik}/>
        else return <div/>
    }

    async function onSell() {
        setLoading(true);
        const categoryName = find(CATEGORIES, e => e.id == category)?.key;
        const total = files.length;

        let values

        switch (category) {
            case '1':
                values = vehicleFormik.values
                break
            case '2':
                values = realEstateFormik.values
                break
            case '3':
                values = electronicFormik.values
                break
            case '4':
                values = jobFormik.values
                break
            case '5':
                values = tourismFormik.values
                break
            case '6':
                values = infantFormik.values
                break
            case '7':
                values = petFormik.values
                break
            case '8':
                values = foodFormik.values
                break
            case '9':
                values = refrigeratorAndAirConditionerFormik.values
                break
            case '10':
                values = householdGoodFormik.values
                break
            case '11':
                values = sportAndEntertainmentFormik.values
                break
            case '12':
                values = fashionFormik.values
                break
            case '13':
                values = ticketFormik.values
                break
            default:
                values = {}
                break;
        }

        const resp = await ApiFactory.getRequest("ProductApi").submitSell(utils.getFormData({
            ...DEFAULT_VAL_SELL,
            collection: categoryName,
            ...values,
            ...userFormik.values,
            ...reduce(files, (rlt, e, idx) => ({...rlt, [`part_${idx}`]: e}), {}),
            user_id: user.userId,
            number: total,
        }), {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        setLoading(false);
        if (resp && resp.success) {
            utils.showMessage('Đăng bài viết', 'Bạn đã đăng bài viết thành công')
            router.replace('/profile/#post').then()
        } else {
            utils.showMessage('Đăng bài viết', 'Bạn đã đăng bài viết không thành công', 'error')
        }
    }

    const isValidSegment = (category === "1" && realEstateFormik.isValid)
        || (category === "2" && vehicleFormik.isValid)
        || (category === "3" && electronicFormik.isValid)
        || (category === "4" && jobFormik.isValid)
        || (category === "5" && tourismFormik.isValid)
        || (category === "6" && infantFormik.isValid)
        || (category === "7" && petFormik.isValid)
        || (category === "8" && foodFormik.isValid)
        || (category === "9" && refrigeratorAndAirConditionerFormik.isValid)
        || (category === "10" && householdGoodFormik.isValid)
        || (category === "11" && sportAndEntertainmentFormik.isValid)
        || (category === "12" && fashionFormik.isValid)
        || (category === "13" && ticketFormik.isValid)

    const isDisableSubmit = !(userFormik.isValid && isValidSegment)
        || category === -1
        || (!files || files.length <= 1)

    return (
        <Layout childrenClasses="pt-0 pb-0">
            <div className="become-saller-wrapper w-full">
                <div className="title mb-10">
                    <PageTitle
                        title="Thông tin đăng bán"
                        breadcrumb={[
                            {name: "trang chủ", path: "/"},
                            {name: "đăng bán", path: "/become-saller"},
                        ]}
                    />
                </div>
                <div className="content-wrapper w-full mb-10">
                    <div className="container-x mx-auto">
                        <div className="w-full bg-white sm:p-[30px] p-3">
                            <div className="flex xl:flex-row flex-col-reverse xl:space-x-11">
                                <div className="xl:w-[724px]">
                                    {category === -1 ?
                                        <div/>
                                        : <div className="title w-full mb-4">
                                            <h1 className="text-[22px] font-semibold text-qblack mb-1">
                                                Thông tin đăng bán
                                            </h1>
                                            <p className="text-[15px] text-qgraytwo">
                                                Điền vào mẫu dưới đây để có thể đăng bán đồ của bạn.
                                            </p>
                                        </div>}
                                    <div className="input-area">
                                        <div className="w-full mb-5">
                                            <select
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                                className="w-full flex items-center px-4 select select-bordered text-xs">
                                                <option value={-1} onClick={() => setCategory(-1)}>
                                                    Danh mục
                                                </option>
                                                {CATEGORIES.map(e => (
                                                    <option key={e.id} value={e.id}>{e.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    {renderBody()}

                                    {/* ============================================================== */}
                                    <div className="title w-full mb-4">
                                        <h1 className="text-[22px] font-semibold text-qblack mb-1">
                                            Thông tin người bán
                                        </h1>
                                    </div>
                                    <form id='user-form-seller' className="input-area"
                                          onSubmit={userFormik.handleSubmit}>
                                        <div
                                            className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                                            <InputCom
                                                placeholder="Nguyễn Văn A"
                                                label="Tên người bán"
                                                name="contact_name"
                                                inputHandler={userFormik.handleChange}
                                                value={userFormik.values.contact_name}
                                                type="text"
                                                required={true}
                                                inputClasses="h-[50px]"
                                                error={userFormik.errors.contact_name}
                                            />
                                            <InputCom
                                                placeholder="0 333 333 333"
                                                label="Số điện thoại"
                                                name="contact_phone"
                                                type="phone"
                                                inputHandler={userFormik.handleChange}
                                                value={userFormik.values.contact_phone}
                                                inputClasses="h-[50px]"
                                                error={userFormik.errors.contact_phone}
                                            />
                                        </div>
                                        {/*<div className="mb-5">*/}
                                        {/*    <div className="text-sm text-gray-400 border border-gray-300*/}
                                        {/*    rounded-lg px-6 py-2 cursor-pointer active:opacity-70 flex items-center justify-between"*/}
                                        {/*         onClick={() => {*/}
                                        {/*             if (document) {*/}
                                        {/*                 document.getElementById("modal-select-address-1").showModal();*/}
                                        {/*             }*/}
                                        {/*         }}>*/}
                                        {/*        <div>{userFormik.values.city ? userFormik.values.city : 'Địa chỉ cụ thế'}</div>*/}
                                        {/*        <div>*/}
                                        {/*            <Arrow*/}
                                        {/*                width="5.78538"*/}
                                        {/*                height="1.28564"*/}
                                        {/*                className="fill-current text-qblacktext"*/}
                                        {/*            />*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

                                        <div className="signin-area mb-3">
                                            <div className="flex justify-center">
                                                <button
                                                    type="button"
                                                    onClick={onSell}
                                                    disabled={isDisableSubmit}
                                                    className="text-sm text-white w-[490px] h-[50px] font-semibold flex justify-center items-center btn btn-neutral"
                                                >
                                                    <span>Đăng tin</span>
                                                    {loading ? <span className="loading loading-spinner"></span> :
                                                        <span/>}
                                                </button>
                                            </div>
                                        </div>

                                        {/*<div className="signup-area flex justify-center">*/}
                                        {/*    <p className="text-sm text-qgraytwo font-normal">*/}
                                        {/*        Already have an Account?*/}
                                        {/*        <Link href="/login" className="ml-2 text-qblack">*/}
                                        {/*            Đăng nhập*/}
                                        {/*        </Link>*/}
                                        {/*    </p>*/}
                                        {/*</div>*/}
                                    </form>
                                </div>
                                <div className="flex-1 mb-10 xl:mb-0">
                                    <div className="update-profile w-full mb-9">
                                        <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
                                            Hình ảnh và Video sản phẩm
                                            <span className="ml-1">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              d="M10 0C4.47457 0 0 4.47791 0 10C0 15.5221 4.47791 20 10 20C15.5221 20 20 15.5221 20 10C19.9967 4.48126 15.5221 0.00669344 10 0ZM10 16.67C9.53815 16.67 9.16667 16.2985 9.16667 15.8367C9.16667 15.3748 9.53815 15.0033 10 15.0033C10.4618 15.0033 10.8333 15.3748 10.8333 15.8367C10.8333 16.2952 10.4618 16.67 10 16.67ZM11.6098 10.425C11.1078 10.7396 10.8132 11.2952 10.8333 11.8842V12.5033C10.8333 12.9652 10.4618 13.3367 10 13.3367C9.53815 13.3367 9.16667 12.9652 9.16667 12.5033V11.8842C9.14324 10.6861 9.76907 9.56827 10.8032 8.96586C11.4357 8.61781 11.7704 7.90161 11.6366 7.19545C11.5027 6.52276 10.9772 5.99732 10.3046 5.8668C9.40094 5.69946 8.5308 6.29853 8.36346 7.20214C8.34673 7.30254 8.33668 7.40295 8.33668 7.50335C8.33668 7.96519 7.9652 8.33668 7.50335 8.33668C7.0415 8.33668 6.67002 7.96519 6.67002 7.50335C6.67002 5.66265 8.16265 4.17001 10.0067 4.17001C11.8474 4.17001 13.34 5.66265 13.34 7.50669C13.3333 8.71821 12.674 9.83601 11.6098 10.425Z"
                              fill="#374557"
                              fillOpacity="0.6"
                          />
                        </svg>
                      </span>
                                        </h1>
                                        <p className="text-sm text-qgraytwo mb-5">
                                            Ảnh có kích thước tối thiểu
                                            <span className="ml-1 text-qblack">300x300</span>. Có thể tải gif.
                                            <span className="ml-1 text-qblack">Tối đa 5MB</span>.
                                        </p>
                                        <div className="flex xl:justify-center justify-start">
                                            <DropZone files={files} setFiles={setFiles}/>
                                        </div>
                                        {(files && files.length > 1) ? null : <span className="label-text-alt text-red-500">Bạn cần chọn ảnh đề tiếp tục</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SelectAddress id={'modal-select-address-1'} onSubmitAddress={addr => {
                    forEach(addr, (val, key) => {
                        userFormik.setFieldValue(key, val)
                    })
                }}/>
            </div>
        </Layout>
    )
        ;
}
