import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";

export default function PrivacyPolicy() {
    return (
        <Layout childrenClasses="pt-0 pb-0">
            <div className="terms-condition-page w-full bg-white pb-[30px]">
                <div className="w-full mb-[30px]">
                    <PageTitle
                        breadcrumb={[
                            {name: "trang chủ", path: "/"},
                            {name: "chính sách bảo mật", path: "privacy-policy"},
                        ]}
                        title="Chính sách bảo mật"
                    />
                </div>
                <div className="w-full">
                    <div className="container-x mx-auto">
                        <div className="content-item w-full mb-10">
                            <h2 className="text-[18px] font-medium text-qblack mb-5">
                                1. Chính sách bảo mật của Raovat24h
                            </h2>
                            <p className="text-[15px] text-qgraytwo leading-7">
                                Công ty TNHH RAOVAT24H tôn trọng và cam kết bảo vệ dữ liệu cá nhân của người dùng. Chúng
                                tôi cam kết sẽ thực hiện các biện pháp liên quan để bảo vệ dữ liệu cá nhân của người
                                dùng tuân theo các quy định pháp luật áp dụng về bảo mật thông tin/dữ liệu cá nhân.
                                Chính sách bảo mật này được lập nhằm quy định cách thức chúng tôi thu thập, sử dụng,
                                tiết lộ, lưu trữ và/ hoặc xử lý dữ liệu khi bạn truy cập vào trang web raovat24.net, ứng
                                dụng &quot;Mua bán Rao vặt&quot; trên nền tảng Android hoặc iOS chính thức của chúng tôi và tất cả
                                các trang web phụ liên quan khác.
                                <br/>
                                Bằng việc sử dụng các Dịch vụ, đăng ký Tài khoản với chúng tôi hoặc truy cập Nền tảng
                                của chúng tôi, bạn xác nhận và đồng ý cho phép chúng tôi thu thập, sử dụng, tiết lộ
                                và/hoặc xử lý dữ liệu cá nhân của bạn như quy định trong Chính sách này. NẾU BẠN KHÔNG
                                ĐỒNG Ý CHO PHÉP XỬ LÝ DỮ LIỆU CỦA BẠN NHƯ QUY ĐỊNH TRONG CHÍNH SÁCH NÀY, VUI LÒNG KHÔNG
                                SỬ DỤNG CÁC DỊCH VỤ CỦA CHÚNG TÔI HOẶC TRUY CẬP NỀN TẢNG CỦA CHÚNG TÔI.
                                <br/>
                                Chúng tôi có toàn quyền sửa đổi, bổ sung, cập nhật Chính sách này tại từng thời điểm.
                                Vui lòng thường xuyên kiểm tra lại Chính sách bảo mật này để theo dõi bất kỳ cập nhật
                                hoặc thay đổi nào đối với Chính sách này.
                            </p>
                        </div>
                        <div className="content-item w-full mb-10">
                            <h2 className="text-[18px] font-medium text-qblack mb-5">
                                2. Chúng tôi sẽ thu thập những thông tin cá nhân nào?
                            </h2>
                            <div className="text-[15px] text-qgray leading-7 mb-10">
                                Những thông tin cá nhân mà chúng tôi có thể thu thập bao gồm, nhưng không giới hạn các
                                thông tin sau:
                                <div>1. Thông tin tài khoản như họ và tên, địa chỉ email, địa
                                    chỉ, giới tính, ngày sinh, ảnh hồ sơ, số điện thoại di động, các thông tin bắt buộc
                                    hoặc không bắt buộc khác</div>
                                <div>2. Dữ liệu khi bạn truy cập và/hoặc sử dụng Nền tảng của
                                    chúng tôi như địa chỉ IP, các thông tin về trình duyệt, các địa chỉ bạn đã truy cập
                                    trên Nền tảng, thời gian bạn hoạt động trên Nền tảng của chúng tôi
                                </div>
                                <div>3. Dữ liệu về vị trí như vị trí điện thoại di động của bạn và/hoặc bất kỳ thông tin
                                    vị trí nào như khi bạn chụp và chia sẻ vị trí của bạn với chúng tôi dưới dạng hình
                                    ảnh hoặc video của bạn và tải nội dung đó lên Nền tảng;
                                </div>
                                <div>
                                    4. Bất kỳ thông tin, dữ liệu nào khác được tiết lộ bởi bạn khi bạn đăng nhập, sử
                                    dụng các Dịch vụ và các Nền tảng của chúng tôi như sở thích của bạn trong việc nhận
                                    thông tin tiếp thị từ chúng tôi và/hoặc từ các bên thứ ba của chúng tôi;
                                </div>
                                <div>5. Bất kỳ dữ liệu, thông tin tổng hợp khác về nội dung người dùng sử dụng.</div>
                            </div>
                            <div>
                                <h2 className="text-[18px] font-medium text-qblack mb-5">
                                    3. Các phương thức bảo vệ thông tin cá nhân
                                </h2>

                                <div className={'text-[15px] text-qgray leading-7 mb-10'}>
                                    <div><span>Chúng tôi đảm bảo rằng mọi thông tin thu thập được sẽ được lưu giữ an toàn, bằng các phương thức sau:</span>
                                        <li>
                                            <span>Giới hạn truy cập thông tin cá nhân bằng việc Đăng ký tài khoản.</span>
                                        </li>
                                        <li>
                                            <span>Sử dụng sản phẩm công nghệ để ngăn chặn truy cập máy tính trái phép.</span>
                                        </li>
                                        <li><span>Xóa thông tin cá nhân của quý khách khi nó không còn cần thiết cho mục đích lưu trữ hồ sơ của chúng tôi.</span>
                                        </li>
                                    </div>
                                    <div><span>Chúng tôi sử dụng công nghệ mã hóa theo giao thức 128-bit SSL (secure sockets layer) khi xử lý tài khoản của bạn.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content-item w-full mb-10">
                            <h2 className="text-[18px] font-medium text-qblack mb-5">
                                4. Lưu giữ thông tin cá nhân
                            </h2>
                            <p className="text-[15px] text-qgraytwo leading-7">
                                Chúng tôi sẽ chỉ lưu giữ thông tin cá nhân của bạn trong thời gian do pháp luật yêu cầu
                                hoặc cho đến khi mục đích thu thập thông tin đó vẫn còn theo Chính sách này.
                            </p>
                        </div>
                        <div className="content-item w-full mb-10">
                            <h2 className="text-[18px] font-medium text-qblack mb-5">
                                5. Thay đổi Chính sách bảo mật
                            </h2>
                            <p className="text-[15px] text-qgraytwo leading-7">
                                Chúng tôi có quyền thay đổi, cập nhật Chính sách này bất kỳ lúc nào miễn là các cập
                                nhật, thay đổi này không trái với quy định của pháp luật hiện hành. Việc thay đổi, cập
                                nhật này sẽ được thông báo đến tất cả người dùng trên Nền tảng của chúng tôi.
                            </p>
                        </div>
                        <div className="content-item w-full mb-10">
                            <h2 className="text-[18px] font-medium text-qblack mb-5">
                                6. Thông tin liên hệ
                            </h2>
                            <p className="text-[15px] text-qgraytwo leading-7">
                                Nếu bạn có bất kỳ thắc mắc, muốn truy cập, thay đổi hoặc xóa, yêu cầu cung cấp thông tin
                                cá nhân, hoặc yêu cầu hạn chế xử lý, phản đối xử lý thông tin cá nhân, hoặc khiếu nại,
                                vui lòng liên hệ với chúng tôi theo địa chỉ email: <span className={'text-blue-500 underline'}>hotroraovat24h@gmail.com</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
