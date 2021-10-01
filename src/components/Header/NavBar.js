import "./NavBar.css";
import { FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { BiWalk } from "react-icons/bi";
import { Link } from "react-router-dom";

import Button from "../Button";
import { useState } from "react";

const NavBar = ({ NavLight, checkSignState, btnClick }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const openMenu = () => {
    setToggleMenu(true);
  };
  const closeMenu = () => {
    setToggleMenu(false);
  };
  return (
    <div
      className={` w-full h-20 text-white flex items-center px-6 ${
        NavLight ? "bg-white" : "bg-gray-900"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center space-x-1 logo">
          <Link to="/">
            <BiWalk
              className={`text-3xl ${NavLight ? "text-black" : "text-white"}`}
            />
          </Link>
          <h3
            className={`text-2xl font-bold ${
              NavLight ? "text-black" : "text-white"
            }`}
          >
            <Link to="/">Motion</Link>
          </h3>
        </div>
        <ul className="items-center hidden space-x-4 md:flex nav-Link">
          <li className={`text-lg ${NavLight ? "text-black" : "text-white"}`}>
            <Link to="/home">Home</Link>
          </li>
          <li className={`text-lg ${NavLight ? "text-black" : "text-white"}`}>
            <Link to="/">Services</Link>
          </li>
          <li className={`text-lg ${NavLight ? "text-black" : "text-white"}`}>
            <Link to="/">Products</Link>
          </li>
          <li className={`text-lg ${NavLight ? "text-black" : "text-white"}`}>
            <div>
              {checkSignState ? (
                <Link to="/signup">
                  <Button
                    NavLight={NavLight}
                    MenuBurger={false}
                    NavBarBtn={true}
                    btnText="SIGN OUT"
                    btnClick={btnClick}
                  />
                </Link>
              ) : (
                <Link to="/signup">
                  <Button
                    NavLight={NavLight}
                    MenuBurger={false}
                    NavBarBtn={true}
                    btnText="SIGN IN"
                  />
                </Link>
              )}
            </div>
          </li>
        </ul>
        <div
          onClick={openMenu}
          className={`block text-3xl cursor-pointer md:hidden ${
            NavLight ? "text-black" : "text-white"
          }`}
        >
          <FiMenu />
        </div>
        <div
          className={`absolute inset-0 transition-all z-10 duration-700 ease-linear flex flex-col items-center justify-center w-full h-full space-y-16 burgerMenu 
          ${toggleMenu ? "inset-0" : "hide"}
          ${NavLight ? "bg-white " : "bg-gray-900 text-white"}`}
        >
          <li
            className={`text-lg font-bold px-4 py-2 ${
              NavLight ? "text-black" : "text-white"
            }`}
          >
            <Link onClick={closeMenu} to="/home">
              Home
            </Link>
          </li>
          <li
            className={`text-lg font-bold px-4 py-2 ${
              NavLight ? "text-black" : "text-white"
            }`}
          >
            <Link onClick={closeMenu} to="/">
              Services
            </Link>
          </li>
          <li
            className={`text-lg font-bold px-4 py-2 ${
              NavLight ? "text-black" : "text-white"
            }`}
          >
            <Link onClick={closeMenu} to="/">
              Products
            </Link>
          </li>
          <li className={`text-lg ${NavLight ? "text-black" : "text-white"}`}>
            <div>
              {checkSignState ? (
                <Link to="/signup">
                  <Button
                    NavLight={NavLight}
                    MenuBurger={false}
                    NavBarBtn={true}
                    btnText="SIGN OUT"
                    btnClick={btnClick}
                  />
                </Link>
              ) : (
                <Link to="/signup">
                  <Button
                    NavLight={NavLight}
                    MenuBurger={false}
                    NavBarBtn={true}
                    btnText="SIGN IN"
                  />
                </Link>
              )}
            </div>
          </li>
          <div
            onClick={closeMenu}
            className={`absolute text-3xl cursor-pointer right-10 -top-10 closeIcon ${
              NavLight ? "text-gray-900" : "text-white"
            }`}
          >
            <FaTimes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
