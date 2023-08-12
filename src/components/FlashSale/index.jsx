import ProductCardStyleOne from "../Helpers/Cards/ProductCardStyleOne";
import CountDown from "../Helpers/CountDown";
import DataIteration from "../Helpers/DataIteration";
import Layout from "../Partials/Layout";

export default function FlashSale({products}) {
  console.log(products)
    const {showDate, showHour, showMinute, showSecound} =
        CountDown("2023-03-04 4:00:00");
    return (
        <Layout>
            <div className="flashsale-wrapper w-full">
                <div className="container-x mx-auto">
                    <div className="w-full">
                        <div
                            style={{
                                background: `url(/assets/images/flash-sale-ads.png) no-repeat`,
                                backgroundSize: "cover",
                            }}
                            data-aos="fade-right"
                            className="flash-ad w-full h-[400px] flex sm:justify-end justify-center items-center mb-10"
                        >
                            <div className="sm:mr-[75px]">
                                <div
                                    className="countdown-wrapper w-full flex sm:space-x-6 space-x-3 sm:justify-between justify-evenly">
                                    <div className="countdown-item">
                                        <div
                                            className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                      <span className="font-700 sm:text-[30px] text-base text-[#EB5757]">
                        {showDate}
                      </span>
                                        </div>
                                        <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">
                                            Days
                                        </p>
                                    </div>
                                    <div className="countdown-item">
                                        <div
                                            className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                      <span className="font-700 sm:text-[30px] text-base text-[#2F80ED]">
                        {showHour}
                      </span>
                                        </div>
                                        <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">
                                            Hours
                                        </p>
                                    </div>
                                    <div className="countdown-item">
                                        <div
                                            className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                      <span className="font-700 sm:text-[30px] text-base text-[#219653]">
                        {showMinute}
                      </span>
                                        </div>
                                        <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">
                                            Minutes
                                        </p>
                                    </div>
                                    <div className="countdown-item">
                                        <div
                                            className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                      <span className="font-700 sm:text-[30px] text-base text-[#EF5DA8]">
                        {showSecound}
                      </span>
                                        </div>
                                        <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">
                                            Seconds
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {products?.length > 0 ? <div
                            className="products grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                            <DataIteration
                                datas={products}
                                startLength={0}
                                endLength={products?.length}
                            >
                                {({datas}) => (
                                    <div data-aos="fade-up" key={datas.id} className="item">
                                        <ProductCardStyleOne datas={datas}/>
                                    </div>
                                )}
                            </DataIteration>
                        </div> : <div/>}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
