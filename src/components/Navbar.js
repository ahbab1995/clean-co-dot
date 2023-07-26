import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-200 px-8">
          <div className="flex-1 px-2 mx-2">Clean Co.</div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-x-3">
              {/* Navbar menu content here */}
              <li className="">
                <NavLink to="/" className="rounded-lg btn-primary">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="rounded-lg btn-primary">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="rounded-lg btn-primary">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="rounded-lg btn-primary">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="rounded-lg btn-primary">
                  Login
                </NavLink>
              </li>
              <li  className="dropdown dropdown-hover dropdown-end">
               
                  <label tabIndex={0} className=" btn-outline btn-primary">
                  BOOK NOW
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
