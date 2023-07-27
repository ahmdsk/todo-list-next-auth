"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              NextTodo is a simple yet efficient task management application
              designed to help users stay organized and focused on their daily
              activities. With a clean and user-friendly interface.
            </p>
            <button className="btn btn-primary" onClick={() => signIn()}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
