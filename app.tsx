// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Stake from "./pages/Stake";
import Reward from "./pages/Reward";
import ClaimReward from "./pages/ClaimReward";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-500 to-blue-700 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/claim" element={<ClaimReward />} />
        </Routes>
      </div>
    </Router>
  );
}