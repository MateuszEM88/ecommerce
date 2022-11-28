import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Discount from "./components/Discount";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Shop from "./components/Shop";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);

    console.log(product);
    console.log(cart);
  };

  return (
    <div className=" min-h-screen">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/discount" element={<Discount />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
