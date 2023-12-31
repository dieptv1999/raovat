import AOS from "aos";
import {useEffect} from "react";
import SEO from '../next-seo.config';
import "aos/dist/aos.css";
import "../styles/globals.scss";
import "../styles/loader.scss";
import "../styles/selectbox.css";
import {useRouter} from "next/router";
import {DefaultSeo} from "next-seo";
import DownloadApp from "../src/components/DownloadApp";
import {ToastContainer} from "react-toastify";
import {AuthContextProvider} from "../src/context/AuthContext";
import "react-toastify/dist/ReactToastify.css";


function MyApp({Component, pageProps}) {
  const location = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    if (!location?.pathname) return;
    if (location.pathname === "/home-two") {
      document.body.classList.add("home-two");
    } else if (location.pathname === "/home-four") {
      document.body.classList.add("home-four");
    } else if (location.pathname === "/") {
      document.body.classList.remove("home-two");
      document.body.classList.add("home-one");
    }
    document.body.classList.add("home-one");
    return () => {
      document.body.classList.remove("home-two");
      document.body.classList.remove("home-four");
      document.body.classList.add("home-one");
    };
  }, [location?.pathname]);

  return (
    <AuthContextProvider>
      <DefaultSeo {...SEO}/>
      <Component {...pageProps} />
      <DownloadApp id={'download-app'}/>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
    </AuthContextProvider>
  );
}

export default MyApp;
