import type { Metadata } from "next";
import "./globals.css";
import { NextAuthProvider } from "./context/session.auth.provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className="dark:bg-white bg-white">{children}</body>
      </NextAuthProvider>
    </html>
  );
}
