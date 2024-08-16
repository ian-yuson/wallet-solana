// TransferButton.tsx
"use client";
import { FC, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Connection,
  Transaction,
  SystemProgram,
  PublicKey,
} from "@solana/web3.js";

const fixedRecipient = "3WRcf5CYBwvb3mf7euQet3TqK5ccAWvaovbBJTNXAc84"; // Fixed recipient address
const fixedAmount = 0.01; // Fixed amount to send (in SOL)

const TransferButton: FC = () => {
  const { publicKey, sendTransaction } = useWallet();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async () => {
    if (!publicKey) {
      setError("Wallet not connected");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const connection = new Connection("https://api.devnet.solana.com");

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(fixedRecipient),
          lamports: fixedAmount * 1e9, // Convert SOL to lamports
        })
      );

      // Sign and send the transaction
      const txSignature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(txSignature, "confirmed");
      alert("Transaction successful!");
    } catch (error) {
      console.error("Failed to send transaction:", error);
      setError("Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleSend} disabled={loading}>
        {loading ? "Sending..." : "Send 0.01 SOL"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default TransferButton;
