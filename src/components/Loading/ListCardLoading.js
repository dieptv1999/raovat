import {CardLoading} from "./CardLoading";
import useWindowSize from "../../../hooks/useWindowSize";

export function ListCardLoading({numCol = 3, numEl = 6}) {
    const size = useWindowSize();

    return (
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4`}>
            {Array.from(Array(size.width < 638 ? 1 : numEl).keys()).map(e => (
                <CardLoading key={e}/>
            ))}
        </div>
    )
}