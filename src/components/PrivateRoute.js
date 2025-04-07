// src/components/PrivateRoute.js

import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setChecking(false);
    });

    return () => unsubscribe();
  }, []);

  if (checking) {
    return <p>読み込み中...</p>;
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
