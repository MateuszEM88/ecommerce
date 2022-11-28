import React from "react";
import potato from "../img/potato.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="absolute z-0  w-full h-screen bg-black overflow-hidden">
        <img
          className="opacity-20 max-md:w-full max-md:h-full max-md:object-cover "
          src={potato}
          alt="potato"
        />
      </div>
      <div className="absolute left-4 sm:left-24 top-1/3 text-gray-300  ">
        <p>Potato trading company.</p>
        <h1 className="text-5xl md:text-6xl">Super value deals.</h1>
        <h1 className="text-3xl md:text-4xl">Lowest prices in the universe!</h1>
        <p>kup kartofla, a najlepiej cały wór, promocja pińcet procent.</p>
        <div className="w-full flex justify-around">
          <NavLink to="/shop">
            <button className=" h-12 w-40 text-black rounded-lg font-bold mt-8  bg-white ">
              Explore
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
