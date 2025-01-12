import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '../../img/열두돌교회로고.png';

const Nav = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} className="h-10" alt="열두돌교회로고" />
          </div>
        </Link>
        <ul className="flex space-x-2 md:space-x-3 ml-9 text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? "text-sky-600 border-b border-sky-600" : "text-black"
                }`
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;