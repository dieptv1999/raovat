import firebase_app from "../config";
import {signInWithEmailAndPassword, getAuth, GoogleAuthProvider} from "firebase/auth";
import ApiFactory from "../../src/apis/ApiFactory";
import {SESSION, USER_ID} from "../../src/utils/constant";

const auth = getAuth(firebase_app);

export default async function signIn({email, password, prevUrl = '/'}) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        const resp = await ApiFactory.getRequest("ProductApi").login({
            code: '117965753955654130549',
            type: 1,
            authen_token: token,
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

    return { result, error };
}