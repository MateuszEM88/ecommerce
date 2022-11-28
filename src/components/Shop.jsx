import React, { useState } from "react";
import list from "./products";
import Card from "./Card";

const Shop = ({ addToCart }) => {
  return (
    <div className="flex justify-center flex-wrap pt-24">
      {list.map((product) => (
        <Card key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Shop;
