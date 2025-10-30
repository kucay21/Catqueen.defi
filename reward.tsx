// src/pages/Reward.tsx
import React from "react";
import { useContract, useReadContract } from "thirdweb/react";
import { client } from "../client";

const STAKING_CONTRACT = "0xef7d6880e7837D06bAa6090F8378592F3B4e174a";

export default function Reward() {
  const { contract } = useContract({ client, address: STAKING_CONTRACT });
  const { data: reward } = useReadContract(contract, "getStakeInfo", []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">🎁 Reward</h1>
      <p className="text-lg">Reward kamu saat ini:</p>
      <p className="text-2xl font-semibold text-yellow-300 mt-2">
        {reward ? reward.toString() + " USDC" : "0 USDC"}
      </p>
    </div>
  );
}