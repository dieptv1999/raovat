import Arrow from "../../Helpers/icons/Arrow";
import Selectbox from "../../Helpers/Selectbox";
import Link from "next/link";
import DownloadApp from "../../DownloadApp";
import {useAuthContext} from "../../../context/AuthContext";

export default function TopBar({ className }) {
  const {user} = useAuthContext()

  return (
    <>
      <div
        className={`w-full bg-white h-10 border-b border-qgray-border ${
          className || ""
        }`}
      >
        <div className="container-x mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <div className="topbar-nav">
              <ul className="flex space-x-6 cursor-pointer">
                <li>
                  <Link href={user ? "/profile" : "/login"}>
                    <span className="text-xs leading-6 text-qblack font-500">
                      Tài khoản
                    </span>
                  </Link>
                </li>
                <li onClick={() => {
                  if (document) {
                    document.getElementById("download-app").showModal();
                  }
                }}>
                    <span
                      className="text-xs leading-6 text-qblack font-500"
                    >
                      Tải ứng dụng
                    </span>
                </li>
                <li>
                  <Link href="/faq">
                    <span className="text-xs leading-6 text-qblack font-500">
                      Hỗ trợ
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="topbar-dropdowns sm:block hidden">
              <div className="flex space-x-6">
                <div className="country-select flex space-x-1 items-center">
                  <div>
                    <img
                src={`/assets/images/vietnam-flag.webp`}
                      width="24"
                      height="24"
                      alt="country logo"
                      className="overflow-hidden rounded-full"
                    />
                  </div>
                  <Selectbox
                    className="w-fit"
                    datas={["Viet Nam", "United State"]}
                  />
                  <div>
                    <Arrow className="fill-current qblack" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
