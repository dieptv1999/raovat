import firebase_app from "../config";
import { signOut, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signOutFirebase() {
    let result = null,
        error = null;
    try {
        localStorage.clear()
        result = await signOut(auth);
    } catch (e) {
        error = e;
    }

    return { result, error };
}