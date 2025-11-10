import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config.js";
import toast from "react-hot-toast";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const googleSignIn = () => {
  return signInWithPopup(auth, googleProvider);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log(user, loading);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const updateUser = (updatedData) => {
    // return updateProfile(auth.currentUser, updatedData);
    if (!auth.currentUser) return;
    return updateProfile(auth.currentUser, updatedData).then(() => {
      setUser({ ...auth.currentUser, ...updatedData });
    });
  };

  const forgotPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false);
        // toast.success("Reset password email sent");
      })
      .catch((error) => {
        setLoading(false);
        console.error(error.message);
        // toast.error("Error sending reset password email. Please try again.");
      });
  };

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    logIn,
    loading,
    setLoading,
    googleSignIn,
    updateUser,
    forgotPassword
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
