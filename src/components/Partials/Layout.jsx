import {useEffect, useState} from "react";
import DiscountBanner from "../DiscountBanner";
import Drawer from "../Mobile/Drawer";
import Footer from "./Footer";
import Header from "./Header";
import {SUBSCRIBER, SUBSCRIBER_TIMING} from "../../utils/constant";

export default function Layout({children, childrenClasses}) {
    const [drawer, setDrawer] = useState(false);
    const [ads, setAds] = useState(false);
    const adsHandle = () => {
        setAds(false);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem(SUBSCRIBER) !== 'true') {
                let d = localStorage.getItem(SUBSCRIBER_TIMING);
                try {
                    if (!d) {
                        setAds(true);
                        localStorage.setItem(SUBSCRIBER_TIMING, new Date().toString())
                    } else {
                        let datePast = new Date(d)
                        let diffMins = Math.round((((new Date() - datePast) % 86400000) % 3600000) / 60000);
                        if (diffMins > 10) {
                            setAds(true);
                            localStorage.setItem(SUBSCRIBER_TIMING, new Date().toString())
                        }
                    }
                } catch (e) {
                    localStorage.removeItem(SUBSCRIBER_TIMING)
                }
            }
        }
    }, []);

    return (
        <>
            <Drawer open={drawer} action={() => setDrawer(!drawer)}/>
            <div className="w-full overflow-x-hidden bg-white">
                <Header drawerAction={() => setDrawer(!drawer)}/>
                <div className={`w-full  ${childrenClasses || "pt-[30px] pb-[60px]"}`}>
                    {children && children}
                </div>
                {ads && <DiscountBanner handler={adsHandle}/>}
                <Footer/>
            </div>
        </>
    );
}
