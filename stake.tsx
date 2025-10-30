// src/pages/Stake.tsx
import React, { useState } from "react";
import { useActiveAccount, useContract, useTokenBalance } from "thirdweb/react";
import { client } from "../client";

const STAKING_CONTRACT = "0xef7d6880e7837D06bAa6090F8378592F3B4e174a";
const TOKEN_ADDRESS = "0x586f3cb4a16c8dbf6a62b599a73eca9cd0b945fe";

export default function Stake() {
  const account = useActiveAccount();
  const [amount, setAmount] = useState("");

  const { contract } = useContract({
    client,
    address: STAKING_CONTRACT,
  });

  const { data: balance } = useTokenBalance({
    client,
    address: TOKEN_ADDRESS,
    account: account?.address,
  });

  async function handleStake() {
    if (!amount) return alert("Masukkan jumlah token!");
    await contract?.write?.stake([amount]);
    alert("Stake berhasil!");
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Stake CatQueen 👑</h1>
      <p>Saldo kamu: {balance?.displayValue} CATQUEEN</p>
      <input
        type="number"
        placeholder="Jumlah token"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 mt-4 text-black rounded"
      />
      <button
        onClick={handleStake}
        className="ml-2 p-2 bg-pink-600 rounded hover:bg-pink-700"
      >
        Stake
      </button>
    </div>
  );
}