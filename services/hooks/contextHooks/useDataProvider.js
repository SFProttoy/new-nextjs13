"use client";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { useState } from "react";

import { initializeApp } from "firebase/app";

// initializeAuthentication();

const firebaseConfig = {
  apiKey: "AIzaSyBlt1CwX9EvdMFb_8Fz8u_1FQD8QebbHwM",
  authDomain: "nextjs-13-new.firebaseapp.com",
  projectId: "nextjs-13-new",
  storageBucket: "nextjs-13-new.appspot.com",
  messagingSenderId: "1098998090752",
  appId: "1:1098998090752:web:c1d047e6465b1760049ce5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const useDataProvider = () => {
  const [user, setUser] = useState({});

  const auth = getAuth(app);

  //   googleSignIn

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const getToken = () => {
    if (typeof localStorage !== "undefined") {
      const tokenString = localStorage.getItem("token");
      const userToken = JSON.parse(tokenString);

      return userToken?.slice(5);
    }
  };

  const logOut = () => {
    signOut(auth)
      .then((res) => {
        localStorage.removeItem("token");
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    user,
    setUser,
    googleSignIn,
    logOut,
    getToken,
  };
};

export default useDataProvider;
