export const PREFIX_FRONT_URL = '';
export const API_VERSION = '';
export const SEO_DEFAULT_URL = process.env.NEXT_PUBLIC_SEO_DEFAULT_URL || 'https://raovat24h.net/';

export const SESSION = 'classified-advertising-session';

export const USER_ID = 'classified-advertising-user-id';
export const SUBSCRIBER = 'classified-advertising-subscriber';
export const SUBSCRIBER_TIMING = 'classified-advertising-subscriber-timing';
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://api.raovat24h.net/api/';

export const NEXT_URL =
    process.env.NEXT_PUBLIC_FRONTEND_URL || "https://localhost:5001";

export const CATEGORIES = [
    {
        id: 1,
        name: 'Xe cộ',
        key: 'Xe cộ',
    },
    {
        id: 2,
        name: 'Bất động sản',
        key: 'Bất động sản',
    },
    {
        id: 3,
        name: 'Đồ điện tử',
        key: 'Đồ điện tử',
    },
    {
        id: 4,
        name: 'Việc làm',
        key: 'Việc làm',
    },
    {
        id: 5,
        name: 'Du lịch',
        key: 'Du lịch',
    },
    {
        id: 6,
        name: 'Mẹ và bé',
        key: 'Mẹ và bé',
    },
    {
        id: 7,
        name: 'Thú cưng',
        key: 'Thú cưng',
    },
    {
        id: 8,
        name: 'Đồ ăn, thực phẩm',
        key: 'Đồ ăn',
    },
    {
        id: 9,
        name: 'Tủ lạnh, máy giặt, máy lạnh',
        key: 'Tủ lạnh, máy lạnh, máy giặt',
    },
    {
        id: 10,
        name: 'Đồ gia dụng, nội thất, cây cảnh',
        key: 'Đồ gia dụng, nội thất, cây cảnh',
    },
    {
        id: 11,
        name: 'Giải trí, thể thao, sở thích',
        key: 'Giải trí, thể thao, sở thích',
    },
    {
        id: 12,
        name: 'Thời trang, đồ dùng cá nhân',
        key: 'Thời trang, Đồ dùng cá nhân',
    },
]

export const TYPE_OF_POST = [
    {
        id: "1",
        value: "0",
        name: 'Cần bán'
    },
    {
        id: "2",
        value: "1",
        name: 'Cần mua'
    },
    {
        id: "3",
        value: "1",
        name: 'Cần thuê'
    },
    {
        id: "4",
        value: "0",
        name: 'Cho thuê'
    },
    {
        id: "5",
        name: 'Khác'
    },
]

export const OBJECT_TYPE = [
    {
        id: 1,
        name: 'Bán chuyên'
    },
    {
        id: 2,
        name: 'Cá nhân'
    },
    {
        id: 3,
        name: 'Đại lý'
    },
]

export const POSITION_HOUSE = [
    {
        id: 1,
        name: 'Đông'
    },
    {
        id: 2,
        name: 'Nam'
    },
    {
        id: 3,
        name: 'Tây'
    },
    {
        id: 4,
        name: 'Đông Bắc'
    },
    {
        id: 5,
        name: 'Đông Nam'
    },
    {
        id: 6,
        name: 'Tây Nam'
    },
    {
        id: 7,
        name: 'Tây Bắc'
    },
]

export const REAL_ESTATE_TYPE = [
    {
        id: 1,
        name: 'Đất'
    },
    {
        id: 2,
        name: 'Liền kề, biệt thự, nhà mặt phố'
    },
    {
        id: 3,
        name: 'Căn hộ/Chung cư'
    },
    {
        id: 4,
        name: 'Nhà ở'
    },
    {
        id: 5,
        name: 'Văn phòng, mặt bằng kinh doanh'
    },
    {
        id: 6,
        name: 'Phòng trọ'
    },
]

export const VEHICLE_TYPE = [
    {
        id: 1,
        name: 'Ô tô'
    },
    {
        id: 2,
        name: 'Xe máy'
    },
    {
        id: 3,
        name: 'Xe tải, xe ben'
    },
    {
        id: 4,
        name: 'Xe điện'
    },
    {
        id: 5,
        name: 'Xe đạp'
    },
    {
        id: 6,
        name: 'Phương tiện khác'
    },
    {
        id: 7,
        name: 'Phụ tùng xe'
    },
]

export const DEFAULT_VAL_SELL = {
    'title': '',
    'base_path': '',
    'des': '',
    'city': '',
    'collection': '',
    'sub_collection': '',
    'contact_name': '',
    'contact_phone': '',
    'type': '',
    'price': '',
    'user_id': '',
    'number': '',
    'district': '',
    'avatar': '',
    'brand': '',
    'model': '',
    'car_status': '',
    'gear_car': '',
    'slot_car': '',
    'style_car': '',
    'fuel_car': '',
    'source_car': '',
    'size': '',
    'front_size': '',
    'orientation': '',
    'num_bed': '',
    'unit_price': '',
    'size_street': '',
    'mobile_color': '',
    'mobile_status': '',
    'mobile_storage': '',
    'sell_type': 'Cá nhân',
    'bicycle_status': '',
    'bicycle_type': '',
    'bicycle_capacity': '',
    'computer_status': '',
    'computer_ram': '',
    'computer_processor': '',
    'computer_screen_size': '',
    'computer_card': '',
    'computer_disk': '',
    'address_more': '',
    'longtitude': '',
    'latitude': ''
}