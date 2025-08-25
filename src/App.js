import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import QR from "./pages/QR";
import History from "./pages/History";
import Profile from "./pages/Profile";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main}>
    {/* <div className="flex h-screen"> */}
      <Header />
      <div className={styles.app}>
      {/* <div className = "flex-1 flex flex-col"> */}
        <Sidebar />
          <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/qr" element={<QR />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
