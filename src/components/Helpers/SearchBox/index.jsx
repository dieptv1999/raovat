import {CATEGORIES} from "../../../utils/constant";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function SearchBox({className, type}) {
    const router = useRouter()
    const [searchText, setSearchText] = useState('');
    const [category, setCategory] = useState();

    function goToDetail() {
        if (router.pathname.includes('all-products')) {
            router.query = {
                categories: category,
                keyword: searchText,
            }

            router.replace(router).then()
        } else {
            router.push({
                pathname: '/all-products',
                query: {
                    categories: category,
                    keyword: searchText,
                }
            }).then();
        }
    }

    useEffect(() => {
        if (router.query.keyword) {
            setSearchText(router.query.keyword)
        }
    }, [router.query.keyword]);

    return (
        <div className="flex flex-col w-full h-full">
            <div
                className={`w-full h-full flex items-center  border border-qgray-border bg-white ${
                    className || ""
                }`}
            >
                <div className="flex-1 bg-red-500 h-full">
                    <div className="h-full">
                        <input
                            type="text"
                            value={searchText}
                            onChange={e => {
                                setSearchText(e.target.value)
                            }}
                            onKeyUp={e => {
                                if (e.key === 'Enter' || e.keyCode === 13) {
                                    goToDetail()
                                }
                            }}
                            className="search-input bg-white"
                            placeholder="Tìm kiếm sản phẩm..."
                        />
                    </div>
                </div>
                <div className="w-[1px] h-[22px] bg-qgray-border"></div>
                <select
                    className="flex-1 flex items-center px-4 select select-ghost border-none h-auto min-h-[42px] text-xs"
                    defaultValue={-1}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{outline: 'none'}}>
                    <option value={-1}>
                        Danh mục
                    </option>
                    {CATEGORIES.map(e => (
                        <option key={e.id} value={e.id}>{e.name}</option>
                    ))}
                </select>
                <button
                    className={` w-[93px] h-full text-sm font-600  ${type === 3 ? 'bg-qh3-blue text-white' : 'search-btn'}`}
                    type="button"
                    onClick={() => {
                        goToDetail()
                    }}
                >
                    Tìm kiếm
                </button>
            </div>
            <div className="text-xs text-gray-400 mt-0.5">Nhấn &apos;Tìm kiếm&apos; hoặc gõ phím enter để tìm kiếm</div>
        </div>
    );
}