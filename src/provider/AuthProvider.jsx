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

  const updateUser = (updatedData) => {
    if (!auth.currentUser) return Promise.reject(new Error("No authenticated user"));
    return updateProfile(auth.currentUser, updatedData).then(() => {
      setUser({ ...auth.currentUser, ...updatedData });
    });
  };

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



// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// const API_URL = "http://localhost:3000"; // Update if your backend runs elsewhere

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Register user by calling backend /register
//   const createUser = async (name, email, password, photoURL) => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_URL}/register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password, photoURL }),
//       });
//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.message || "Registration failed");
//       }
//       const data = await res.json();
//       setUser(data.user);
//       setLoading(false);
//       return { user: data.user };
//     } catch (error) {
//       setLoading(false);
//       throw error;
//     }
//   };

//   // Login user by calling backend /login
//   const logIn = async (email, password) => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_URL}/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.message || "Login failed");
//       }
//       const data = await res.json();
//       setUser(data.user);
//       setLoading(false);
//       return { user: data.user };
//     } catch (error) {
//       setLoading(false);
//       throw error;
//     }
//   };

//   // Stub for google sign-in (implement if you want)
//   const googleSignIn = async () => {
//     throw new Error("Google Sign In not implemented");
//   };

//   // Stub for updateUser profile
//   const updateUser = async (updatedData) => {
//     setUser((prev) => ({ ...prev, ...updatedData }));
//   };

//   const logOut = () => {
//     setUser(null);
//   };

//   const authData = {
//     user,
//     setUser,
//     createUser,
//     logIn,
//     logOut,
//     loading,
//     googleSignIn,
//     updateUser,
//   };

//   return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;
