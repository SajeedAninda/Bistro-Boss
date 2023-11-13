import React, { createContext, useEffect, useState } from 'react';
import { app } from './firebase.config.js';
export let AuthContext = createContext();
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GithubAuthProvider, onAuthStateChanged, updateProfile , signOut } from "firebase/auth";
const auth = getAuth(app);
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();



const AuthenticationProvider = ({ children }) => {
    let [loading, setLoading] = useState(true);
    let [loggedInUser, setLoggedInUser] = useState(null);


    let signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    let signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    let logOut = () => {
        return signOut(auth)
    }
    let googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    let gitLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    }

    let profileUpdate = (name,photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
    }

    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (user) => {
            setLoggedInUser(user);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])


    let authentication = {
        signUp,
        signIn,
        googleLogin,
        gitLogin,
        profileUpdate,
        logOut,
        loggedInUser,
        loading
    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthenticationProvider;