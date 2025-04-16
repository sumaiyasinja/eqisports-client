import React, { createContext, useEffect, useState } from 'react';
import { 
    GoogleAuthProvider, 
    signInWithPopup, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // Email registration
    const registerWithEmailPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password); 
    };

    // Email login
    const loginWithEmailPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password); 
    };

    // Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Google Sign-In
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider); 
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            if (currentUser) {
               
                // console.log(currentUser);
            }
            setLoading(false);

        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    const authInfo = {
        user,
        registerWithEmailPassword,
        loginWithEmailPassword,
        logOut,
        googleSignIn
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;