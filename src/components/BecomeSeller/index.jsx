import {useRef, useState} from "react";
import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import {CATEGORIES} from "../../utils/constant";
import Arrow from "../Helpers/icons/Arrow";
import SelectAddress from "../SelectAddress";
import dynamic from "next/dynamic";
import Vehicle from "./Vehicle";

const DropZone = dynamic(() => import("../DropZone").then(e => e.DropZone), {ssr: false})

export default function BecomeSeller() {
    const [category, setCategory] = useState(-1);

    function renderBody() {
        console.log(category)
        if (category == 1) return <Vehicle onSubmit={(values) => {}}/>
        else return <div />
    }

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
                                                    <option key={e.id} value={e.id} >{e.name}</option>
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
                                    <div className="input-area">
                                        <div className="mb-5">
                                            <InputCom
                                                placeholder="Nguyễn Văn A"
                                                label="Tên người bán"
                                                name="shopname"
                                                type="text"
                                                required={true}
                                                inputClasses="h-[50px]"
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <div className="text-sm text-gray-400 border border-gray-300
                                            rounded-lg px-6 py-2 cursor-pointer active:opacity-70 flex items-center justify-between"
                                                 onClick={() => {
                                                     if (document) {
                                                         document.getElementById("modal-select-address-1").showModal();
                                                     }
                                                 }}>
                                                <div>Số 1, Cầu Giấy, Hà Nội</div>
                                                <div>
                                                    <Arrow
                                                        width="5.78538"
                                                        height="1.28564"
                                                        className="fill-current text-qblacktext"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="signin-area mb-3">
                                            <div className="flex justify-center">
                                                <button
                                                    type="button"
                                                    className="black-btn text-sm text-white w-[490px] h-[50px] font-semibold flex justify-center bg-purple items-center"
                                                >
                                                    <span>Đăng tin</span>
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
                                    </div>
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
                                            <DropZone/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SelectAddress id={'modal-select-address-1'}/>
            </div>
        </Layout>
    )
        ;
}
