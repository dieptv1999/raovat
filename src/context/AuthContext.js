import React from 'react';
import {
    onAuthStateChanged,
    getAuth,
} from 'firebase/auth';
import firebase_app from '../../firebase/config';
import {SESSION, USER_ID} from "../utils/constant";
import axios from "axios";

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({
                                        children,
                                    }) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            const token = localStorage.getItem(SESSION)
            const userId = localStorage.getItem(USER_ID)
            if (user && !!token && token !== '') {
                setUser({
                    ...user,
                    token,
                    userId,
                });

                axios.interceptors.request.use(function (config) {
                    config.headers['api-token'] =  token;
                    config.headers['user-id'] =  userId;
                    return config;
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};