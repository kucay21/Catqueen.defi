// src/pages/ClaimReward.tsx
import React from "react";
import { useContract } from "thirdweb/react";
import { client } from "../client";

const STAKING_CONTRACT = "0xef7d6880e7837D06bAa6090F8378592F3B4e174a";

export default function ClaimReward() {
  const { contract } = useContract({ client, address: STAKING_CONTRACT });

  async function handleClaim() {
    await contract?.write?.claimRewards([]);
    alert("Reward berhasil diklaim!");
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">💰 Claim Reward</h1>
      <button
        onClick={handleClaim}
        className="p-3 bg-green-600 rounded hover:bg-green-700"
      >
        Claim USDC Reward
      </button>
    </div>
  );
}