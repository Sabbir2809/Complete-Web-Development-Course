import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

// CreateContext
export const AuthContext = createContext();
//
const googleProvider = new GoogleAuthProvider();
// getAuth
const auth = getAuth(app);
// UserContext
const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // createUserWithEmailAndPassword
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signInWithEmailAndPassword
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signInWithGoogle
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // SignOUt
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, createUser, signIn, logOut, signInWithGoogle, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
