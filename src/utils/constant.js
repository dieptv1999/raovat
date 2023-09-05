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
        name: 'Ô tô',
        brand: [
            {name: "Tất cả", brand: [],},
            {
                name: "Kia", brand: [
                    "Morning",
                    "Rio",
                    "K3",
                    "Cerato",
                    "Forte",
                    "Sedona",
                    "Rondo",
                    "Carens",
                    "Avella",
                    "Cadenza",
                    "Carnival",
                    "Cerato Koup",
                    "CD5",
                    "Clarus",
                    "Concord",
                    "Enterprise",
                    "Jeep",
                    "Joice",
                    "K5",
                    "K7",
                    "Lotze",
                    "Magentis",
                    "Opirus",
                    "Optima",
                    "Picanto",
                    "Potentia",
                    "Pregio",
                    "Pride",
                    "Quoris",
                    "Ray",
                    "Retona",
                    "Roadster",
                    "Seltos",
                    "Sephia",
                    "Sorento",
                    "Soul",
                    "Soluto",
                    "Spectra",
                    "Sportage",
                    "Visto",
                    "Dòng khác"
                ],
            },
            {name: "Toyota", brand: [],},
            {name: "Ford", brand: [],},
            {name: "Chevrolet", brand: [],},
            {name: "Hyundai", brand: [],},
            {name: "Honda", brand: [],},
            {name: "Mazda", brand: [],},
            {name: "Mitsubishi", brand: [],},
            {name: "Acura", brand: [],},
            {name: "Alfa Romeo", brand: [],},
            {name: "Asia", brand: [],},
            {name: "Aston Martin", brand: [],},
            {name: "Audi", brand: [],},
            {name: "Baic", brand: [],},
            {name: "Bentley", brand: [],},
            {name: "BMW", brand: [],},
            {name: "Buick", brand: [],},
            {name: "BYD", brand: [],},
            {name: "Cadillac", brand: [],},
            {name: "Changan", brand: [],},
            {name: "Chery", brand: [],},
            {name: "Chrysler", brand: [],},
            {name: "Citroen", brand: [],},
            {name: "Daewoo", brand: [],},
            {name: "Daihatsu", brand: [],},
            {name: "Dodge", brand: [],},
            {name: "Ferrari", brand: [],},
            {name: "Fiat", brand: [],},
            {name: "Gaz", brand: [],},
            {name: "Geely", brand: [],},
            {name: "GMC", brand: [],},
            {name: "Haima", brand: [],},
            {name: "Hummer", brand: [],},
            {name: "Infiniti", brand: [],},
            {name: "Isuzu", brand: [],},
            {name: "Jaguar", brand: [],},
            {name: "Jeep", brand: [],},
            {name: "Lada", brand: [],},
            {name: "Lamborghini", brand: [],},
            {name: "LandRover", brand: [],},
            {name: "Lexus", brand: [],},
            {name: "Lifan", brand: [],},
            {name: "Lincoln", brand: [],},
            {name: "Luxgen", brand: [],},
            {name: "Man", brand: [],},
            {name: "Maserati", brand: [],},
            {name: "Maybach", brand: [],},
            {name: "Mekong", brand: [],},
            {name: "Mercedes Benz", brand: [],},
            {name: "Mercury", brand: [],},
            {name: "MG", brand: [],},
            {name: "Mini", brand: [],},
            {name: "Nissan", brand: [],},
            {name: "Opel", brand: [],},
            {name: "Peugeot", brand: [],},
            {name: "Pontiac", brand: [],},
            {name: "Porsche", brand: [],},
            {name: "Proton", brand: [],},
            {name: "Renault", brand: [],},
            {name: "Reult", brand: [],},
            {name: "Rolls Royce", brand: [],},
            {name: "Rover", brand: [],},
            {name: "Samsung", brand: [],},
            {name: "Scion", brand: [],},
            {name: "Smart", brand: [],},
            {name: "Ssangyong", brand: [],},
            {name: "Subaru", brand: [],},
            {name: "Suzuki", brand: [],},
            {name: "SYM", brand: [],},
            {name: "Tesla", brand: [],},
            {name: "UAZ", brand: [],},
            {name: "Vinfast", brand: [],},
            {name: "Volkswagen", brand: [],},
            {name: "Volvo", brand: [],},
            {name: "Zotye", brand: [],},
            {name: "Hãng khác", brand: [],},
        ]
    },
    {
        id: 2,
        name: 'Xe máy',
        brand: [
            {name: "Tất cả", brand: []},
            {name: "Honda", brand: []},
            {name: "Yamaha", brand: []},
            {name: "Piaggio", brand: []},
            {name: "Suzuki", brand: []},
            {name: "SYM", brand: []},
            {name: "Aprilia", brand: []},
            {name: "Bazan", brand: []},
            {name: "Benelli", brand: []},
            {name: "BMW", brand: []},
            {name: "Brixton", brand: []},
            {name: "CR-S", brand: []},
            {name: "Daelim", brand: []},
            {name: "Detech", brand: []},
            {name: "Ducati", brand: []},
            {name: "Euro Reibel", brand: []},
            {name: "GPX", brand: []},
            {name: "Halim", brand: []},
            {name: "Harley Davidson", brand: []},
            {name: "Hyosung", brand: []},
            {name: "Kawasaki", brand: []},
            {name: "Keeway", brand: []},
            {name: "Kengo", brand: []},
            {name: "KTM", brand: []},
            {name: "Kymco", brand: []},
            {name: "Lambretta", brand: []},
            {name: "Malaguti", brand: []},
            {name: "Moto Guzzi", brand: []},
            {name: "MV Agusta", brand: []},
            {name: "Nioshima", brand: []},
            {name: "Norton", brand: []},
            {name: "Peugeot", brand: []},
            {name: "RebelUSA", brand: []},
            {name: "Regal Raptor", brand: []},
            {name: "Royal Enfield", brand: []},
            {name: "Sachs", brand: []},
            {name: "Sanda", brand: []},
            {name: "Taya", brand: []},
            {name: "Triumph", brand: []},
            {name: "Vento", brand: []},
            {name: "Victory", brand: []},
            {name: "Visitor", brand: []},
            {name: "Hãng khác", brand: [],},
        ]
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

export const CAR_STATUS = [
    "Đã sử dụng",
    "Mới"
]

export const GEAR_CAR = [
    "Tất cả",
    "Tự động",
    "Số sàn",
    "Bán tự động"
]

export const FUEL_CAR = [
    "Tất cả",
    "Xăng",
    "Dầu",
    "Động cơ Hybrid"
]

export const SOURCE_CAR = [
    "Tất cả",
    "Việt Nam",
    "Ấn Độ",
    "Hàn Quốc",
    "Thái Lan",
    "Nhật Bản",
    "Trung Quốc",
    "Mỹ",
    "Đức",
    "Đài Loan",
    "Nước khác"
]

export const STYLE_CAR = [
    "Tất cả",
    "Sedan",
    "SUV / Cross over",
    "Hatchback",
    "Pick-up (bán tải)",
    "Minivan (MPV)",
    "Van",
    "Coupe (2 cửa)",
    "Mui trần",
    "Kiểu dáng khác"
]

export const STYLE_MOTOR_BIKE = [
    "Tất cả",
    "Tay ga",
    "Xe số",
    "Tay côn/Moto"
]

export const SLOT_CAR = [
    "Tất cả",
    2,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    12,
    14,
    16,
    "Khác"
]

export const CAPACITY_MOTOR_BIKE = [
    "Tất cả",
    "Dưới 50 cc",
    "50 - 100 cc",
    "100 - 175 cc",
    "Trên 175 cc",
    "Không biết rõ"
]

export const ELECTRONIC_DEVICE = [
    {name: "Tất cả", brand: [],},
    {
        name: "Điện thoại", brand: [
            {name: "Tất cả", brand: []},
            {name: "Alcatel", brand: []},
            {name: "Apple", brand: [

                ]},
            {name: "Aquos", brand: []},
            {name: "Arbutus", brand: []},
            {name: "Asanzo", brand: []},
            {name: "Asus", brand: []},
            {name: "BKAV", brand: []},
            {name: "Blackberry", brand: []},
            {name: "Bluboo", brand: []},
            {name: "Coolpad", brand: []},
            {name: "Dopod", brand: []},
            {name: "Elephone", brand: []},
            {name: "Epic", brand: []},
            {name: "Essential", brand: []},
            {name: "Fujitsu", brand: []},
            {name: "Gionee", brand: []},
            {name: "Google", brand: []},
            {name: "Hero", brand: []},
            {name: "HTC", brand: []},
            {name: "Huawei", brand: []},
            {name: "Intel", brand: []},
            {name: "Itel", brand: []},
            {name: "Kechaoda", brand: []},
            {name: "Kyocera", brand: []},
            {name: "Land Rover", brand: []},
            {name: "Leagoo", brand: []},
            {name: "Lenovo", brand: []},
            {name: "LG", brand: []},
            {name: "Masstel", brand: []},
            {name: "Meitu", brand: []},
            {name: "Meizu", brand: []},
            {name: "Microsoft", brand: []},
            {name: "Mobell", brand: []},
            {name: "Mobiado", brand: []},
            {name: "Mobiistar", brand: []},
            {name: "Motorola", brand: []},
            {name: "Nokia phổ thông", brand: []},
            {name: "Nokia thông minh", brand: []},
            {name: "Nubia", brand: []},
            {name: "Obi", brand: []},
            {name: "OnePlus", brand: []},
            {name: "Oppo", brand: []},
            {name: "Oukitel", brand: []},
            {name: "Palm", brand: []},
            {name: "Philips", brand: []},
            {name: "Pocophone", brand: []},
            {name: "Q Mobile", brand: []},
            {name: "Razer", brand: []},
            {name: "Realme", brand: []},
            {name: "Samsung", brand: []},
            {name: "Sharp", brand: []},
            {name: "Sky", brand: []},
            {name: "Sony", brand: []},
            {name: "Uimi", brand: []},
            {name: "Ulefone", brand: []},
            {name: "Umidigi", brand: []},
            {name: "Vertu", brand: []},
            {name: "Vivo", brand: []},
            {name: "Vsmart", brand: []},
            {name: "Wiko", brand: []},
            {name: "Wing", brand: []},
            {name: "Xiaomi", brand: []},
            {name: "ZiP", brand: []},
            {
                name: "Hãng khác", brand: []
            },],
    },
    {name: "Máy tính bảng", brand: [],},
    {
        name: "Laptop", brand: [
            {name: "Tất cả", brand: [],},
            {name: "Apple", brand: [],},
            {name: "Asus", brand: [],},
            {name: "HP", brand: [],},
            {name: "Dell", brand: [],},
            {name: "Lenovo", brand: [],},
            {name: "Acer", brand: [],},
            {name: "Samsung", brand: [],},
            {name: "Toshiba", brand: [],},
            {name: "MSI", brand: [],},
            {name: "Sony", brand: [],},
            {name: "Razer", brand: [],},
            {name: "LG", brand: [],},
            {name: "Panasonic", brand: [],},
            {name: "Hãng Khác", brand: [],},
        ],
    },
    {name: "Máy tính để bàn", brand: [],},
    {name: "Máy ảnh, Máy quay", brand: [],},
    {name: "Tivi, Âm thanh", brand: [],},
    {name: "Thiết bị đeo thông minh", brand: [],},
    {name: "Phụ kiện(Màn hình, chuột,..)", brand: [],},
    {name: "Linh kiện(RAM, Card...)", brand: [],},
]