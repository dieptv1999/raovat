import {BASE_URL, SESSION} from "./constant";
import moment from "moment";

function getToken() {
  if (process.browser) {
    let sessionKey = localStorage.getItem(SESSION);
    if (sessionKey) {
      let timeExpired = sessionKey.substr(sessionKey.length - 10, 10);
      if (moment.utc().unix() > (parseInt(timeExpired, 10) + 86400)) {
        return undefined;
      } else {
        return sessionKey;
      }
    } else {
      return undefined;
    }
  } else return undefined
}

const getBaseURL = () => {
  return BASE_URL;
};

const getFirstImage = (urls) => {
  if (!urls) return '';

  const url = urls.split(';')

  return url[0]
}

const getListImage = (urls) => {
  if (!urls) return '';

  return urls.split(';')
}

const formatMoney = (x) => {
  if (!x) return null;
  if (typeof x == 'string') x = parseInt(x);
  return x.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

const convertIntToStringLocale = (timeDiff) => {
  timeDiff = timeDiff / 1000;
  if (timeDiff <= 60) return "Vừa đăng";
  if (timeDiff < 3600) return (Math.ceil(timeDiff / 60.0)) + " phút trước"
  if (timeDiff < 3600 * 24) return (Math.ceil(timeDiff / 3600.0)) + " giờ trước"
  if (timeDiff < 3600 * 24 * 365) return (Math.ceil(timeDiff / (3600.0 * 24))) + " ngày trước"
  return (Math.ceil(timeDiff / (3600.0 * 24 * 365))) + " năm"
}

export default {
  getToken,
  getBaseURL,
  getListImage,
  getFirstImage,
  formatMoney,
  convertIntToStringLocale,
}