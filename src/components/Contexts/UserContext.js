import React, { createContext, useEffect, useState } from "react";
import App from "../../App";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/FirebaseInit";

export let AuthContext = createContext();

let auth = getAuth(app);

const UserContext = ({ children }) => {
  let [user, setUser] = useState({});
  let [loading, setLoading] = useState(true);

  let googleProvider = new GoogleAuthProvider();

  // Create user register

  let createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Signin With Email and Password

  let signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  let signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // log out user

  let userSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  let authInfo = {
    user,
    loading,
    createUser,
    signIn,
    userSignOut,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
