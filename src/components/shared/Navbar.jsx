import Image from "next/image";
import Link from "next/link";
import { SlHandbag } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 text-slate-900">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                href="/"
                className="hover:text-primary ease-in-out duration-300 font-bold "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-primary ease-in-out duration-300 font-bold "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-primary ease-in-out duration-300 font-bold "
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-primary ease-in-out duration-300 font-bold "
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-primary ease-in-out duration-300 font-bold "
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Image src="/assets/logo.svg" height={50} width={80} alt="Logo Image" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/"
              className="hover:text-primary ease-in-out duration-300 font-bold text-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-primary ease-in-out duration-300 font-bold text-lg"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-primary ease-in-out duration-300 font-bold text-lg"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-primary ease-in-out duration-300 font-bold text-lg"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-primary ease-in-out duration-300 font-bold text-lg"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <a className="text-xl font-bold cursor-pointer hover:text-primary">
          {" "}
          <SlHandbag />
        </a>
        <a className="text-2xl font-extrabold pr-3 cursor-pointer hover:text-primary">
          {" "}
          <CiSearch />
        </a>
        <a className="btn btn-outline btn-primary px-10 ">
          Appointment
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
