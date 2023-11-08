"use client";

import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { FiGithub, FiPlus, FiZap } from "react-icons/fi";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content">
        <div className="lg:flex justify-center items-center gap-8">
          <div className="flex-1 pb-6 sm:pb-0">
            <div className="flex justify-end">
              <div className="w-full sm:w-96 h-48 relative">
                <Image
                  src="/images/todo_list.svg"
                  alt="Todo List"
                  layout="fill"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 p-3">
            <h1 className="text-5xl font-bold">NextTodo</h1>
            <p className="text-base lg:w-2/3 w-full pt-2 pb-4">
              NextTodo is a simple yet efficient task management application
              designed to help users stay organized and focused on their daily
              activities. With a clean and user-friendly interface.
            </p>
            <div className="flex justify-center sm:justify-start">
              <div className="flex items-center gap-2 sm:gap-4">
                {session ? (
                  <Link
                    href="/dashboard"
                    className="btn btn-neutral normal-case"
                  >
                    <FiPlus /> Create List
                  </Link>
                ) : (
                  <button
                    className="btn btn-neutral normal-case"
                    onClick={() => signIn()}
                  >
                    <FiZap /> Get Started
                  </button>
                )}
                <button className="btn btn-outline btn-neutral normal-case">
                  <FiGithub /> Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
