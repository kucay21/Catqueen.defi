// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "thirdweb/react";
import { client } from "../client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black/30 backdrop-blur-lg">
      <div className="flex gap-4 text-lg font-semibold">
        <Link to="/">Dashboard</Link>
        <Link to="/stake">Stake</Link>
        <Link to="/reward">Reward</Link>
        <Link to="/claim">Claim</Link>
      </div>
      <ConnectButton client={client} theme="dark" />
    </nav>
  );
}