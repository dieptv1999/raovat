import firebase_app from "../config";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider} from "firebase/auth";
import ApiFactory from "../../src/apis/ApiFactory";
import {SESSION} from "../../src/utils/constant";

const auth = getAuth(firebase_app);


export default async function signUp({email, password, fullName}) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        const resp = await ApiFactory.getRequest("ProductApi").login({
            code: '117965753955654130549',
            type: 1,
            name: fullName,
            email: email,
            password: password,
        })
        if (resp.success) {
            localStorage.setItem(SESSION, resp.token)
            window.location.replace('/')
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