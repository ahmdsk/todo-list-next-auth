import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";

import { FiChevronDown, FiLogOut, FiLogIn, FiGrid } from "react-icons/fi";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-end lg:px-12 px-3 py-4">
      {session ? (
        <div className="dropdown dropdown-bottom dropdown-end">
          <label
            tabIndex={0}
            className="m-1 capitalize btn btn-sm btn-ghost font-normal px-1"
          >
            {session.user?.name} <FiChevronDown className="text-xl" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="#">
                <FiGrid /> Dashboard
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => signOut()}>
                <FiLogOut /> Logout
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <Link
          href="#"
          className="link link-hover flex items-center gap-3"
          onClick={() => signIn()}
        >
          <FiLogIn /> Login
        </Link>
      )}
    </div>
  );
}
