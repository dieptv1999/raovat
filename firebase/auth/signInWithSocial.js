import firebase_app from "../config";
import {GoogleAuthProvider, getAuth, signInWithPopup, FacebookAuthProvider, OAuthProvider} from "firebase/auth";
import ApiFactory from "../../src/apis/ApiFactory";
import * as url from "url";
import {SESSION, USER_ID} from "../../src/utils/constant";

const auth = getAuth(firebase_app);


export default async function signInWithSocial(type, prevUrl = '/') {
    let result = null,
        error = null,
        token = null;
    try {
        let provider = null;
        if (type === 'facebook') {
            provider = new FacebookAuthProvider();
        } else if (type === 'google') {
            provider = new GoogleAuthProvider();
        } else if (type === 'apple') {
            provider = new OAuthProvider('apple.com');
        }

        result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        const resp = await ApiFactory.getRequest("ProductApi").login({
            code: '117965753955654130549',
            type: type === 'google' ? 3 :
                type === 'apple' ? 2 : 0,
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
        console.log({credential, token, user});
    } catch (e) {
        error = e;
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({errorCode, errorMessage, email, credential});
    }

    return {result, error, token};
}