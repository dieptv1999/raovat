import {getAuth, GoogleAuthProvider, PhoneAuthProvider, signInWithCredential} from "firebase/auth";
import ApiFactory from "../../src/apis/ApiFactory";
import {SESSION, USER_ID} from "../../src/utils/constant";
import firebase_app from "../config";

const auth = getAuth(firebase_app);

export default async function verifyOtp(verificationId, code, prevUrl = '/') {
    const authCredential = PhoneAuthProvider.credential(verificationId, code);
    const credential = await signInWithCredential(auth, authCredential);
    const token = credential?.user?.accessToken;

    const user = credential.user;
    const resp = await ApiFactory.getRequest("ProductApi").login({
        code: '117965753955654130549',
        type: 1,
        authen_token: token,
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
    })
    if (resp.success) {
        localStorage.setItem(SESSION, resp.token)
        localStorage.setItem(USER_ID, resp.user?.id)
        window.location.replace(prevUrl)
    }
}