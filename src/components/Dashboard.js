// src/components/Dashboard.js

import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Dashboard = () => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <h2>ダッシュボード</h2>
      <p>ログインに成功しました！</p>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default Dashboard;
