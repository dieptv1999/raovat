import {BASE_URL, SESSION, USER_ID} from "./constant";
import moment from "moment";
import {toast} from "react-toastify";
import {forEach} from "lodash/collection";
import signOutFirebase from "../../firebase/auth/signOut";

function getToken() {
    if (process.browser) {
        let sessionKey = localStorage.getItem(SESSION);
        if (sessionKey) {
            return sessionKey;
        } else {
            return undefined;
        }
    } else return undefined
}

function getUserId() {
    if (process.browser) {
        return localStorage.getItem(USER_ID)
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
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    } else if (status === 'error') {
        toast.error(message, {
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

function getFormData(obj) {
    let bodyFormData = new FormData();
    if (!obj) return bodyFormData;
    forEach(obj, (value, key) => {
        bodyFormData.append(key, value)
    })

    return bodyFormData
}

function logout() {
    localStorage.clear()
    signOutFirebase()
    if (typeof window !== 'undefined')
        window.location.href = '/'
}

function transformPhone(str, hide) {
    if (!hide) return str.substring(0, str.length - 4) + '****'
    else return str;
}

function copyToMem(text) {
    navigator.clipboard.writeText(text);

    // Alert the copied text
    alert("Đã sao chép số diện thoại vào bộ nhớ tạm");
}

function transformDesc(desc) {
    if (!desc) return ''
    if (desc.length < 30) return desc
    return desc.substring(0, 120) + '...'
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
    getFormData,
    getUserId,
    logout,
    transformPhone,
    copyToMem,
    transformDesc,
}