import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '../../img/열두돌교회로고.png';

const Nav = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex justify-between w-1 h-1 items-center">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} className="h-0.1" alt="열두돌교회로고" />
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
              교회소개
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/word"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? "text-sky-600 border-b border-sky-600" : "text-black"
                }`
              }
            >
              말씀
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Hymn"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? "text-sky-600 border-b border-sky-600" : "text-black"
                }`
              }
            >
              찬양
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallary"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? "text-sky-600 border-b border-sky-600" : "text-black"
                }`
              }
            >
                사진첩
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;