"use client";

import initializeAuthentication from "@/services/firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { useState } from "react";

initializeAuthentication();

const useDataProvider = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();

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
