import Image from "next/image";

import logo from "@/assets/book.ico"
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost ">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >

            <li>
            <Link href= "./books">  Books </Link>
          </li>
            
    
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link href="./">Book Vibe</Link>
        <Image src ={logo} alt=""></Image>
      </div>
      <div className="navbar-center  lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href= "./books">  Books </Link>
          </li>
          <li>
            <Link href= "./listedBooks">  Listed Book </Link>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-success">Sign In</a>
        <a className="btn btn-error ">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
