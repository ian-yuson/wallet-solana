import Image from "next/image";
import WalletButton from "./components/WalletButton";
import TransferButton from "./components/TransferButton";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <WalletButton />
      <TransferButton />
    </div>
  );
}
