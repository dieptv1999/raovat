import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import Thumbnail from "./Thumbnail";

export default function TrackingOrder() {
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="tracking-page-wrapper w-full">
        <div className="page-title mb-[40px]">
          <PageTitle
            title="Theo dõi đơn hàng"
            breadcrumb={[
              { name: "trang chủ", path: "/" },
              { name: "theo dõi đơn hàng", path: "/tracking-order" },
            ]}
          />
        </div>
        <div className="content-wrapper w-full mb-[40px]">
          <div className="container-x mx-auto">
            <h1 className="text-[22px] text-qblack font-semibold leading-9">
              Theo dõi đơn hàng
            </h1>
            <p className="text-[15px] text-qgraytwo leading-8 mb-5">
              Nhập mã đơn hàng của bạn
            </p>
            <div className="w-full bg-white lg:px-[30px] px-5 py-[23px] lg:flex items-center">
              <div className="lg:w-[642px] w-full">
                <div className="mb-3">
                  <InputCom
                    placeholder="Mã đơn hàng"
                    label="Mã theo dõi đơn hàng"
                    required={true}
                    inputClasses="w-full h-[50px]"
                  />
                </div>
                <div className="mb-[30px]">
                  <InputCom
                    placeholder="23/09/2022"
                    label="Ngày giao"
                    inputClasses="w-full h-[50px]"
                  />
                </div>

                <a href="#">
                  <div className="w-[142px] h-[50px] black-btn flex justify-center items-center">
                    <span>Gửi</span>
                  </div>
                </a>
              </div>
              <div className="flex-1 flex justify-center mt-5 lg:mt-0">
                <Thumbnail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
