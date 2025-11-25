"use client";
import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { api } from "@/lib/api";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Register new user
  const register = async (email, password, displayName) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update display name in Firebase
    await updateProfile(userCredential.user, {
      displayName: displayName,
    });
    
    // Save user to backend
    try {
      await api.createUser({
        firebaseUid: userCredential.user.uid,
        name: displayName,
        email: email,
        photoURL: null,
      });
    } catch (error) {
      console.error("Failed to save user to backend:", error);
      // Continue even if backend save fails
    }
    
    return userCredential;
  };

  // Sign in with email and password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google
  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    
    // Try to get user from backend
    try {
      const existingUser = await api.getUser(result.user.uid);
      
      // If user doesn't exist in backend, create them
      if (!existingUser) {
        await api.createUser({
          firebaseUid: result.user.uid,
          name: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        });
      }
    } catch (error) {
      console.error("Backend user check/create failed:", error);
      // Continue even if backend operations fail
    }
    
    return result;
  };

  // Update user profile
  const updateUserProfile = async (updates) => {
    if (!user) return;
    
    // Update Firebase profile
    const profileUpdates = {};
    if (updates.displayName) profileUpdates.displayName = updates.displayName;
    if (updates.photoURL) profileUpdates.photoURL = updates.photoURL;
    
    await updateProfile(auth.currentUser, profileUpdates);
    
    // Update backend
    try {
      await api.updateUser(user.uid, {
        name: updates.displayName,
        photoURL: updates.photoURL,
      });
    } catch (error) {
      console.error("Failed to update user in backend:", error);
      throw error;
    }
    
    // Refresh user state
    setUser({ ...auth.currentUser });
  };

  // Sign out
  const logout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    loading,
    register,
    login,
    loginWithGoogle,
    logout,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
