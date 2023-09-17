import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";

export default function TermsCondition() {
    return (
        <Layout childrenClasses="pt-0 pb-0">
            <div className="terms-condition-page w-full bg-white pb-[30px]">
                <div className="w-full mb-[30px]">
                    <PageTitle
                        breadcrumb={[
                            {name: "trang chủ", path: "/"},
                            {name: "điều khoản sử dụng", path: "/terms-conditions"},
                        ]}
                        title="Điều khoản sử dụng"
                    />
                </div>
                <div className="w-full">
                    <div className="container-x mx-auto">
                        <div className="content-item w-full mb-10">
                            <h2 className="text-[18px] font-medium text-qblack mb-5">
                                1. Quy định chung
                            </h2>
                            <p className="text-[15px] text-qgraytwo leading-7">
                                Bằng việc sử dụng dịch vụ “Raovat24h” này, Bạn cam kết đã đọc, đồng ý không huỷ
                                ngang đối với các Điều khoản và điều kiện sử dụng dịch vụ “Raovat24h” mà Công ty
                                TNHH RAOVAT24H và/hoặc các công ty con, công ty liên kết của Công ty TNHH RAOVAT24H đang
                                cung cấp và tích hợp trên website raovat24h.net và/hoặc ứng
                                dụng "Mua bán Rao vặt".
                            </p>
                            <p>Trường hợp Bạn không đồng ý với những nội dung tại Điều khoản và điều kiện này, vui lòng
                                không sử dụng hoặc truy cập Dịch vụ “Raovat24h“.</p>
                        </div>
                        <div className="content-item w-full mb-10">
                            <h2 className="text-[18px] font-medium text-qblack mb-5">
                                2. Điều khoản dịch vụ
                            </h2>
                            <p className="text-[15px] text-qgraytwo leading-7 mb-10">
                                Để cung cấp dịch vụ “Raovat24h”, Bạn xác nhận rằng Raovat24h có thể tích hợp các
                                dịch vụ được cung cấp bởi một số nhà cung cấp dịch vụ, nhà thầu phụ, đối tác và/hoặc đại
                                lý (“Nhà cung cấp dịch vụ”) vào nền tảng. Để sử dụng dịch vụ này, bạn đồng ý
                                tuân thủ các điều khoản bổ sung mà Nhà cung cấp dịch vụ đó đang cung cấp và xử lý khoản
                                thanh toán của bạn. Các điều khoản này có thể được Nhà cung cấp dịch vụ sửa đổi tại từng
                                thời điểm tuân theo pháp luật.
                            </p>
                            <p>
                                Bằng cách cung cấp thông tin tài khoản cho Raovat24h hoặc Nhà cung cấp dịch vụ, bạn
                                tuyên
                                bố và đảm bảo rằng: (i) bạn được ủy quyền hợp pháp để cung cấp thông tin đó cho chúng
                                tôi; (ii) bạn được ủy quyền hợp pháp để thực hiện nhận thanh toán từ (các) tài khoản mà
                                bạn đã cung cấp cho chúng tôi; và (iii) hành động đó không vi phạm các điều khoản và
                                điều kiện áp dụng cho việc bạn sử dụng (các) tài khoản đó hoặc luật hiện hành.
                            </p>
                            <p>
                                Bạn hiểu rõ và đồng ý rằng, bất cứ vi phạm nào của Bạn đối với bản Điều Khoản và Điều
                                kiện này và/hoặc Thỏa Thuận Sử Dụng và/hoặc báo cáo vi phạm của Bạn đối với Quy chế hoạt
                                động Sàn giao dịch thương mại điện tử trên Raovat24h, sẽ được xem là cơ sở để tạm
                                ngưng và/hoặc từ chối cung cấp dịch vụ cho Bạn ngay lập tức mà Nhà cung cấp dịch vụ
                                và/hoặc Raovat24h không phải chịu bất cứ chế tài, trách nhiệm nào.
                            </p>
                            <div>
                                <h2 className="text-[18px] font-medium text-qblack mb-5">
                                    2. Các hành vi cấm
                                </h2>

                                <ul className="list-disc ml-5">
                                    <li className="text-[15px] text-qgraytwo leading-7">
                                        Bạn thừa nhận và đồng ý rằng bạn sẽ không sử dụng dịch vụ “Raovat24h” liên
                                        quan đến bất kỳ hành vi vi phạm pháp luật, hành vi lừa đảo hoặc bất kỳ nội dung,
                                        hoạt động kinh doanh nào vi phạm Quy chế hoạt động Sàn tại và/hoặc các quy định
                                        pháp luật có liên quan khác có hiệu lực tại từng thời điểm.
                                    </li>
                                    <li className="text-[15px] text-qgraytwo leading-7">
                                        Raovat24h có quyền thực hiện tất cả các biện pháp để đảm bảo rằng bạn không sử
                                        dụng dịch vụ “Raovat24h” cho các hoạt động kinh doanh vi phạm Quy chế hoạt
                                        động Sàn và/hoặc các quy định pháp luật liên quan khác. Raovat24h bảo lưu quyền
                                        chấm dứt vĩnh viễn hoặc chấm dứt tạm thời hoạt động của Tài khoản nếu thành viên
                                        tham gia giao dịch được xác định đã vi phạm Quy chế tài khoản, Quy chế hoạt
                                        động, Quy định đăng tin và/hoặc có những hành vi ảnh hưởng đến hoạt động kinh
                                        doanh của Raovat24h
                                    </li>
                                    <li className="text-[15px] text-qgraytwo leading-7">
                                        Bạn cũng đồng ý rằng bạn phải chịu toàn bộ trách nhiệm đối với các giao dịch bán
                                        bằng dịch vụ “Raovat24h” này thông qua Tài khoản của bạn, kể cả các giao
                                        dịch mà bạn không cho phép thực hiện.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={'uppercase'}>
                            BẠN CAM KẾT ĐÃ ĐỌC CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN DỊCH VỤ NÀY VÀ ĐỒNG Ý VỚI TẤT CẢ CÁC ĐIỀU KHOẢN NHƯ TRÊN CŨNG NHƯ BẤT KỲ ĐIỀU KHOẢN NÀO ĐƯỢC CHỈNH SỬA SAU NÀY.
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
