import firebase_app from "../config";
import {GoogleAuthProvider, getAuth, signInWithPopup, FacebookAuthProvider, OAuthProvider} from "firebase/auth";
import ApiFactory from "../../src/apis/ApiFactory";

const auth = getAuth(firebase_app);


export default async function signInWithSocial(type) {
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
            code: user.id,
            type: 3,
            auth_token: token,
        })
        console.log(resp);
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