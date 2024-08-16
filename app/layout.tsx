import "./globals.css";
import { WalletContext } from "./components/WalletContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Project",
  description: "My Solana platform project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WalletContext>{children}</WalletContext>
      </body>
    </html>
  );
}
