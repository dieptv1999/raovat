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

export default {
  getToken,
  getBaseURL,
}