import firebase_app from "../config";
import {signInWithPhoneNumber, getAuth, GoogleAuthProvider, RecaptchaVerifier} from "firebase/auth";
import ApiFactory from "../../src/apis/ApiFactory";
import {SESSION} from "../../src/utils/constant";

const auth = getAuth(firebase_app);

export default async function signInWithPhone({phone, prevUrl = '/', onVisibleOtp = () => {}}) {
    let result = null,
        error = null;
    try {
        phone = '+84' + phone.substring(1)
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            'size': 'invisible'
        });
        result = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
        console.log(result)

        return result.verificationId;
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
}