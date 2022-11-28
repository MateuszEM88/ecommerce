import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import logo from "../img/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex fixed justify-between z-10 items-center w-screen h-20 bg-white shadow-lg">
      <div className=" mx-8 text-xl">
        <NavLink to="/">
          <div className="flex items-center">
            <img className="h-12 w-12" src={logo} alt="logo" />
            <h1>potato.com</h1>
          </div>
        </NavLink>
      </div>
      <ul className="flex inline my-4 mr-16 gap-16 text-lg font-semibold max-md:hidden">
        <li className="hover:text-green-700  duration-500">
          <NavLink className="focus:text-green-700" to="/">
            Home
          </NavLink>
        </li>
        <li className="hover:text-green-700  duration-500">
          <NavLink className="focus:text-green-700" to="/shop">
            Shop
          </NavLink>
        </li>
        <li className="hover:text-green-700 duration-500">
          <NavLink className="focus:text-green-700" to="/discount">
            Discount
          </NavLink>
        </li>
        <li className="hover:text-green-700 duration-500">
          <NavLink className="focus:text-green-700" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="hover:text-green-700  duration-500">
          <NavLink className="focus:text-green-700" to="/cart">
            Cart
          </NavLink>
        </li>
      </ul>
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-4 z-20 top-4 md:hidden"
      >
        <Hamburger toggled={open} toggle={setOpen} />
      </div>
      <div
        className={`fixed md:hidden backdrop-blur transform duration-700 bg-white flex flex-col right-0 top-0 w-2/3 h-screen justify-center text-center ${
          open ? "flex" : "-translate-y-full"
        }`}
      >
        <ul className="flex-col inline my-4  text-4xl font-bold ">
          <li className="hover:text-green-700 py-4 duration-500">
            <NavLink onClick={() => setOpen(!open)} to="/">
              Home
            </NavLink>
          </li>
          <li className="hover:text-green-700  duration-500">
            <NavLink className="focus:text-green-700" to="/shop">
              Shop
            </NavLink>
          </li>
          <li className="hover:text-green-700 py-4 duration-500">
            <NavLink onClick={() => setOpen(!open)} to="/discount">
              Discount
            </NavLink>
          </li>
          <li className="hover:text-green-700 py-4 duration-500">
            <NavLink onClick={() => setOpen(!open)} to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="hover:text-green-700  duration-500">
            <NavLink className="focus:text-green-700" to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
