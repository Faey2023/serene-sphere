import { createContext, useEffect } from "react";
import { useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.console";
import toast from "react-hot-toast";

const googleProvider = new GoogleAuthProvider(auth);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //current user data
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      console.log(currentUser);
    });
  }, []);

  const profile = (name) => {
    setUser(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const facebookLogin = () => {
    toast.error("Featured not added yet!");
  };

  const logOut = () => {
    signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    profile,
    googleLogin,
    facebookLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
