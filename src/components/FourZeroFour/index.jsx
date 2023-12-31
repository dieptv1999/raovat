import BreadcrumbCom from "../BreadcrumbCom";
import Layout from "../Partials/Layout";
import ErrorThumb from "./ErrorThumb";
import Link from "next/link";

export default function FourZeroFour() {
  return (
    <Layout>
      <div className="cart-page-wrapper w-full">
        <div className="container-x mx-auto">
          <BreadcrumbCom paths={[{ name: "trang chủ", path: "/" }]} />
          <div className="empty-card-wrapper w-full">
            <div className="flex justify-center items-center w-full">
              <div>
                <div className="sm:mb-10 mb-0 transform sm:scale-100 scale-50">
                  <ErrorThumb />
                </div>
                <div data-aos="fade-up" className="empty-content w-full">
                  <h1 className="sm:text-xl text-base font-semibold text-center mb-5">
                    Lấy làm tiếc! Chúng tôi không tìm thấy trang này !
                  </h1>
                  <Link href="/">
                    <div className="flex justify-center w-full ">
                      <div className="w-[200px] h-[50px] ">
                        <button type="button" className="yellow-btn">
                          Quay trở lại trang chủ
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
