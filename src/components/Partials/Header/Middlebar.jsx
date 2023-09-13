import Cart from "../../Cart";
import ThinBag from "../../Helpers/icons/ThinBag";
import ThinLove from "../../Helpers/icons/ThinLove";
import ThinPeople from "../../Helpers/icons/ThinPeople";
import SearchBox from "../../Helpers/SearchBox";
import Link from "next/link";
import {useAuthContext} from "../../../context/AuthContext";
import LoginIcon from "../../Helpers/icons/LoginIcon";

export default function Middlebar({className, type}) {
    const {user} = useAuthContext()

    return (
        <div className={`w-full h-[86px] bg-white ${className}`}>
            <div className="container-x mx-auto h-full">
                <div className="relative h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="cursor-pointer">
                            {type === 3 ? (
                                <Link href="/">
                                    <img
                                        width="152"
                                        height="36"
                                        src={`/assets/images/logo-3.png`}
                                        alt="logo"
                                    />
                                </Link>
                            ) : type === 4 ? (
                                <Link href="/">
                                    <img
                                        width="152"
                                        height="36"
                                        src={`/assets/images/logo-4.png`}
                                        alt="logo"
                                    />
                                </Link>
                            ) : (
                                <Link href="/">
                                    <img
                                        width="152"
                                        height="36"
                                        src={`/assets/images/logo.png`}
                                        alt="logo"
                                    />
                                </Link>
                            )}

                        </div>
                        <div className="w-[517px] h-[44px]">
                            <SearchBox type={type} className="search-com"/>
                        </div>
                        <div className="flex space-x-6 items-center">
                            {/*<div className="compaire relative">*/}
                            {/*  <Link href="/products-compaire" passHref>*/}
                            {/*    <a rel="noopener noreferrer">*/}
                            {/*      <span>*/}
                            {/*      <Compair />*/}
                            {/*    </span>*/}
                            {/*    </a>*/}

                            {/*  </Link>*/}
                            {/*  <span className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${type===3?'bg-qh3-blue text-white':'bg-qyellow'}`}>*/}
                            {/*    2*/}
                            {/*  </span>*/}
                            {/*</div>*/}
                            <div className="favorite relative">
                                <Link href={user ? "/wishlist" : "/login?url=%2Fwishlist"} passHref>
                                    <a rel="noopener noreferrer">
                    <span>
                    <ThinLove/>
                  </span>
                                    </a>
                                </Link>
                                <span
                                    className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${type === 3 ? 'bg-qh3-blue text-white' : 'bg-qyellow text-black'}`}>
                  1
                </span>
                            </div>
                  {/*          <div className="cart-wrapper group relative py-4">*/}
                  {/*              <div className="cart relative cursor-pointer">*/}
                  {/*                  <Link href={user ? "/cart" : "/login?url=%2Fcart"} passHref>*/}
                  {/*                      <a rel="noopener noreferrer">*/}
                  {/*    <span>*/}
                  {/*    <ThinBag/>*/}
                  {/*  </span>*/}
                  {/*                      </a>*/}
                  {/*                  </Link>*/}
                  {/*                  <span*/}
                  {/*                      className={`w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ${type === 3 ? 'bg-qh3-blue text-white' : 'bg-qyellow'}`}>*/}
                  {/*  15*/}
                  {/*</span>*/}
                  {/*              </div>*/}
                  {/*              {user ? <Cart type={type}*/}
                  {/*                            className="absolute -right-[45px] top-11 z-50 hidden group-hover:block"/>*/}
                  {/*                  : <div/>}*/}
                  {/*          </div>*/}
                            <div>
                                <Link href={user ? '/profile#dashboard' : '/login?url=%2Fprofile#dashboard'} passHref>
                                    <a rel="noopener noreferrer">
                    <span>
                    {user ? <ThinPeople/> : <LoginIcon/>}
                  </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
