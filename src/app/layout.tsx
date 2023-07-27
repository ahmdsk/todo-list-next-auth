"use client";

import "./globals.css";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextTodo",
  description: "Free and Open Source Todo App made with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en" data-theme="dark">
        <body className={poppins.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
