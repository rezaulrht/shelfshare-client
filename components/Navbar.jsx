// components/Navbar.jsx
"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  const navLinks = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/books">Browse Books</Link></li>
      <li><Link href="/community">Community</Link></li>
      <li><Link href="/about">About</Link></li>
    </>
  );

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md border-b border-base-200 px-4 sm:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium text-neutral"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost text-2xl font-heading text-primary pl-0 hover:bg-transparent gap-3"
        >
          <img src="/logo.png" alt="ShelfShare Logo" className="w-12 h-12 object-contain" />
          ShelfShare
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-neutral">
          {navLinks}
        </ul>
      </div>
      
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full bg-primary text-white flex items-center justify-center">
                <span className="text-lg font-bold">
                  {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
                </span>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="menu-title">
                <span>{user.displayName || user.email}</span>
              </li>
              <li><Link href="/add-book">Add a Book</Link></li>
              <li><Link href="/my-shelf">My Shelf</Link></li>
              <li><Link href="/profile">Profile</Link></li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
        ) : (
          <Link
            href="/login"
            className="btn btn-primary text-white px-6"
          >
            Login / Join
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
