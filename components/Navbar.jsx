// components/Navbar.jsx
import Link from "next/link";

const Navbar = () => {
  // Mock auth state - replace with your actual auth logic (e.g., useSession)
  const user = null; 

  const navLinks = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/books">Browse Books</Link></li>
      <li><Link href="/community">Community</Link></li>
      <li><Link href="/about">About</Link></li>
    </>
  );

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
        <ul className="menu menu-horizontal px-1 font-medium text-neutral gap-2">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  alt="User Avatar"
                  src={user.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/add-book" className="justify-between">
                  Add a Book
                  <span className="badge badge-accent badge-sm">New</span>
                </Link>
              </li>
              <li><Link href="/my-shelf">My Shelf</Link></li>
              <li><button className="text-error">Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link href="/login" className="btn btn-primary text-white px-6">
            Login / Join
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
