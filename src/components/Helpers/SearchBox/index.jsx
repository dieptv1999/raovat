import {CATEGORIES} from "../../../utils/constant";

export default function SearchBox({className, type}) {
    return (
        <>
            <div
                className={`w-full h-full flex items-center  border border-qgray-border bg-white ${
                    className || ""
                }`}
            >
                <div className="flex-1 bg-red-500 h-full">
                    <form action="#" className="h-full">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Tìm kiếm sản phẩm..."
                        />
                    </form>
                </div>
                <div className="w-[1px] h-[22px] bg-qgray-border"></div>
                <select
                    className="flex-1 flex items-center px-4 select select-ghost border-none h-auto min-h-[42px] text-xs"
                    defaultValue={-1}
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
                >
                    Tìm kiếm
                </button>
            </div>
        </>
    );
}