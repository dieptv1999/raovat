import {BASE_URL, SESSION} from "./constant";
import moment from "moment";
import {toast} from "react-toastify";
import get from "lodash/get";

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
    return x.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
}

const convertIntToStringLocale = (timeDiff) => {
    timeDiff = timeDiff / 1000;
    if (timeDiff <= 60) return "Vừa đăng";
    if (timeDiff < 3600) return (Math.ceil(timeDiff / 60.0)) + " phút trước"
    if (timeDiff < 3600 * 24) return (Math.ceil(timeDiff / 3600.0)) + " giờ trước"
    if (timeDiff < 3600 * 24 * 365) return (Math.ceil(timeDiff / (3600.0 * 24))) + " ngày trước"
    return (Math.ceil(timeDiff / (3600.0 * 24 * 365))) + " năm"
}

function getUrlTweet(text, url) {
    if (text) {
        return `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`
    } else {
        return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`
    }
}

function getUrlFacebook(text, url) {
    if (text) {
        return `https://www.facebook.com/sharer/sharer.php?t=${text}&u=${encodeURIComponent(url)}`
    } else {
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    }
}

function getUrlTelegram(text, url) {
    if (text) {
        return `https://t.me/share/url?text=${text}&url=${encodeURIComponent(url)}`
    } else {
        return `https://t.me/share/url?url=${encodeURIComponent(url)}`
    }
}

function copyToClipboard(text, url) {
    navigator.clipboard.writeText(url).then(() => {
        toast.success('Đã copy link vào clipboard')
    });
}

function showMessage(title, message, status = 'success') {
    if (!document) return;
    if (status === 'success') {
        toast.success(message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }
}

export default {
    getToken,
    getBaseURL,
    getListImage,
    getFirstImage,
    formatMoney,
    convertIntToStringLocale,
    showMessage,
    copyToClipboard,
    getUrlTelegram,
    getUrlFacebook,
    getUrlTweet,
}