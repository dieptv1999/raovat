import {useEffect, useState} from "react";
import BreadcrumbCom from "../BreadcrumbCom";
import ProductCardStyleOne from "../Helpers/Cards/ProductCardStyleOne";
import DataIteration from "../Helpers/DataIteration";
import Layout from "../Partials/Layout";
import ProductsFilter from "./ProductsFilter";
import ApiFactory from "../../apis/ApiFactory";
import {useRouter} from "next/router";
import {CATEGORIES} from "../../utils/constant";
import {find, reduce} from "lodash/collection";
import {throttle} from "lodash/function";
import {remove} from "lodash/array";
import {ListCardLoading} from "../Loading";

export default function AllProductPage() {
    const router = useRouter()
    const [filters, setFilter] = useState({
        mobileLaptop: false,
        gaming: false,
        imageVideo: false,
        vehicles: false,
        furnitures: false,
        sport: false,
        foodDrinks: false,
        fashion: false,
        toilet: false,
        makeupCorner: false,
        babyItem: false,
        apple: false,
        samsung: false,
        walton: false,
        oneplus: false,
        vivo: false,
        oppo: false,
        xiomi: false,
        others: false,
        sizeS: false,
        sizeM: false,
        sizeL: false,
        sizeXL: false,
        sizeXXL: false,
        sizeFit: false,
    });

    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(false);
    const categories = router.query.categories?.split(',');
    const checkboxHandler = (name) => {
        let query = categories ?? [];
        const id = name.replace('filter', '');

        if (query.includes(id)) {
            remove(query, e => e === id)
        } else {
            query = [...query, id]
        }

        router.query.categories = query.join(',')
        router.replace(router)
    };
    const [volume, setVolume] = useState([30, 60]);

    const [storage, setStorage] = useState(null);
    const filterStorage = (value) => {
        setStorage(value);
    };
    const [filterToggle, setToggle] = useState(false);

    function fetchData() {
        if (!categories || categories.length === 0) {
            fetchSell()
        } else {
            fetchSellByCategory()
        }
    }

    async function fetchSell() {
        setLoading(true)
        const resp = await ApiFactory.getRequest("ProductApi").getListSellMore({
            create_dt: products?.length > 0 ? products[products[products.length - 1].create_dt] : null, // ngày của item cuối page trước đó
        })

        setLoading(false)
        setProducts(resp?.listSell)
    }

    async function fetchSellByCategory() {
        const create_dt = products?.length > 0 ? products[products.length - 1]?.create_dt : null;
        let collection_name = [];
        if (typeof categories == 'string') {
            collection_name = find(CATEGORIES, f => f.id == categories)?.key
        } else {
            categories.forEach(e => find(CATEGORIES, f => {
                if (f.id == e) collection_name = [...collection_name, f.key]
            }))

            collection_name = collection_name.join(',')
        }
        setLoading(true)
        const resp = await ApiFactory.getRequest("ProductApi").getListSellViaCollectionMore({
            // collection_id: typeof categories == 'string' ? categories : categories[0], // id của collection,
            collection: collection_name,
            create_dt: create_dt, // ngày của item cuối page trước đó
        })

        setLoading(false)
        setProducts(!!create_dt ? [...products, ...resp?.listSell] : resp?.listSell)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setProducts([])
            setFilter(reduce(typeof categories == 'string' ? [categories] : categories, (rlt, e) => ({
                ...rlt,
                ['filter' + e]: true
            }), {}));
            throttle(() => {
                fetchData()
            }, 400, {trailing: true})()
        }
    }, [router.query.categories]);

    return (
        <>
            <Layout>
                <div className="products-page-wrapper w-full">
                    <div className="container-x mx-auto">
                        <div className="inline-flex justify-between items-center w-full mb-2 lg:mb-0">
                            <BreadcrumbCom/>
                            <button
                                onClick={() => setToggle(!filterToggle)}
                                type="button"
                                className="w-10 lg:hidden h-10 rounded flex justify-center items-center border border-qyellow text-qyellow"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full lg:flex lg:space-x-[30px]">
                            <div className="lg:w-[270px]">
                                <ProductsFilter
                                    filterToggle={filterToggle}
                                    filterToggleHandler={() => setToggle(!filterToggle)}
                                    filters={filters}
                                    checkboxHandler={(e) => checkboxHandler(e.target.name)}
                                    volume={volume}
                                    volumeHandler={(value) => setVolume(value)}
                                    storage={storage}
                                    filterstorage={filterStorage}
                                    className="mb-[30px]"
                                />
                                {/* ads */}
                                <div className="w-full hidden lg:block h-[295px]">
                                    <img
                                        src={`/assets/images/ads-5.png`}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex-1">
                                <div
                                    className="hidden products-sorting w-full bg-white md:h-[70px] md:flex md:flex-row flex-col md:space-y-0
                                    space-y-5 md:justify-between md:items-center p-[30px] mb-[10px]">
                                    <div>
                                        <p className="font-400 text-[13px]">
                                            <span className="text-qgray"> Tìm thấy</span> 1–16 of 66
                                            kết quả
                                        </p>
                                    </div>
                                    <div className="flex space-x-3 items-center">
                                        <span className="font-400 text-[13px]">Sắp xếp theo:</span>
                                        <div className="flex space-x-3 items-center border-b border-b-qgray">
                      <span className="font-400 text-[13px] text-qgray">
                        Mặc định
                      </span>
                                            <span>
                        <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1 1L5 5L9 1" stroke="#9A9A9A"/>
                        </svg>
                      </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setToggle(!filterToggle)}
                                        type="button"
                                        className="w-10 lg:hidden h-10 rounded flex justify-center items-center border border-qyellow text-qyellow"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className={`grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  xl:gap-[30px] gap-5 ${loading ? '' : 'mb-[40px]'}`}>
                                    <DataIteration datas={products} startLength={0}
                                                   endLength={(products?.length ?? 4) - 4}>
                                        {({datas}) => (
                                            <div data-aos="fade-up" key={datas.id}>
                                                <ProductCardStyleOne datas={datas}/>
                                            </div>
                                        )}
                                    </DataIteration>
                                </div>

                                {loading ?
                                    <div/>
                                    : <div className="w-full h-[164px] overflow-hidden mb-[40px]">
                                        <img
                                            src={`/assets/images/ads-6.png`}
                                            alt=""
                                            className="w-full h-full object-contain"
                                        />
                                    </div>}
                                <div
                                    className={`grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 ${loading ? '' : 'mb-[40px]'}`}>
                                    <DataIteration
                                        datas={products}
                                        startLength={(products?.length ?? 4) - 4}
                                        endLength={products?.length ?? 0}
                                    >
                                        {({datas}) => (
                                            <div data-aos="fade-up" key={datas.id}>
                                                <ProductCardStyleOne datas={datas}/>
                                            </div>
                                        )}
                                    </DataIteration>
                                </div>
                                {loading ? <ListCardLoading/> : <div/>}
                                <div className="flex justify-center my-6">
                                    <button className="btn btn-warning" onClick={fetchData}>Xem thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
