// src/pages/Dashboard.tsx
import React from "react";
import { useActiveAccount } from "thirdweb/react";

export default function Dashboard() {
  const account = useActiveAccount();

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">🐱 CatQueen Dashboard</h1>
      {account ? (
        <>
          <p className="text-xl mb-2">Wallet Address:</p>
          <p className="text-pink-200">{account.address}</p>
          <p className="mt-6 text-lg">Selamat datang di CatQueen Staking!</p>
        </>
      ) : (
        <p>Silakan connect wallet dulu.</p>
      )}
    </div>
  );
}