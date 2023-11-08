"use client";

import Tasks from "@/components/Tasks";
import { Metadata } from "next";
import Link from "next/link";
import { FiPlus, FiSearch } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        {/* Search Bar */}
        <div className="join flex-auto">
          <input
            className="input input-bordered join-item w-full"
            placeholder="Search your tasks..."
          />
          <button className="btn join-item">
            <FiSearch />
          </button>
        </div>
        {/* End Search Bar  */}

        {/* Add Modal List */}
        <div className="">
          <Link href="/create" className="btn btn-neutral">
            <FiPlus />
            <span className="hidden sm:inline">Add Task</span>
          </Link>
        </div>
        {/* End Modal List */}
      </div>

      {/* Task List */}
      <div className="flex flex-col my-2">
        <Tasks />
      </div>
    </>
  );
}
