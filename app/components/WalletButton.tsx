"use client";

// components/ConnectWalletButton.tsx
import { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const WalletButton: FC = () => {
  return <WalletMultiButton />;
};

export default WalletButton;
