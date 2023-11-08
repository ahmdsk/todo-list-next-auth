"use client";

import Header from "@/components/Header";
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
      <html lang="en" data-theme="light">
        <title>{metadata.title?.toString()}</title>
        <meta name="description" content={metadata.description as string} />
        <body className={poppins.className}>
          <div className="container mx-auto">
            <Header />        
            {children}
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
