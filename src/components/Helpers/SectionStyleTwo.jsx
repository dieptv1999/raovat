import ProductCardRowStyleOne from "./Cards/ProductCardRowStyleOne";
import DataIteration from "./DataIteration";
import {useAuthContext} from "../../context/AuthContext";

export default function SectionStyleTwo({className, products, type, authenticated = false}) {
    return (
        <div
            className={`section-content w-full grid sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 ${
                className || ""
            }`}
        >
            <DataIteration datas={products} startLength={0} endLength={4}>
                {({datas}) => (
                    <div key={datas.id} className="item w-full">
                        <ProductCardRowStyleOne
                            type={type}
                            datas={datas}
                            authenticated={authenticated}
                        />
                    </div>
                )}
            </DataIteration>
        </div>
    );
}
