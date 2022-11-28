import React, { useState } from "react";
import cartButton from "../img/cart.png";

const Card = ({ product, addToCart }) => {
  const { id, name, price, image, description } = product;

  return (
    <div className="flex flex-col w-56 m-2 rounded-xl h-72 border-2 shadow-lg border-gray-300 overflow-hidden">
      <div className="w-full h-1/2 ">
        <img className="w-60 h-36" src={image} alt="warzywo" />
      </div>
      <div className="flex flex-col justify-around">
        <h1 className="flex justify-around w-full mt-2">{name}</h1>
        <p className=" flex justify-around w-full">{price}</p>
        <div className="w-full flex justify-around mt-4">
          <button
            onClick={() => addToCart(product)}
            className="flex justify-around items-center w-40 rounded-lg h-12 bg-blue-300 hover:bg-blue-400"
          >
            Add to cart <img className="w-10 h-10" src={cartButton} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
