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

  // ✅ Updated createUser to async with try/catch and setLoading handling
  const createUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return userCredential;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // ✅ Updated logIn to async with try/catch and setLoading handling
  const logIn = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      return userCredential;
    } catch (error) {
      setLoading(false);
      throw error;
    }
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

  // ✅ Updated updateUser to reject if no user is logged in
  const updateUser = (updatedData) => {
    if (!auth.currentUser) return Promise.reject(new Error("No authenticated user"));
    return updateProfile(auth.currentUser, updatedData).then(() => {
      setUser({ ...auth.currentUser, ...updatedData });
    });
  };

  // ✅ Uncommented toast in forgotPassword and added error toast
  const forgotPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false);
        toast.success("Reset password email sent");
      })
      .catch((error) => {
        setLoading(false);
        console.error(error.message);
        toast.error("Error sending reset password email. Please try again.");
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
    forgotPassword,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
