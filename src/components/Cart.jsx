import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex w-4/5 md:w-1/2 justify-center m-4 flex-wrap mt-28">
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex flex-row w-full h-36 mb-2 rounded-lg border-2 shadow-lg border-gray-300 overflow-hidden bg-white "
          >
            <div className="w-1/3 h-full">
              <img className="w-60 h-36" src={product.image} alt="warzywo" />
            </div>
            <div className="flex flex-col w-2/3 justify-around">
              <div className="flex flex-row w-full justify between">
                <h1 className="flex justify-around w-full mt-2">
                  {product.name}
                </h1>
                <p className=" flex justify-around w-full">
                  {product.price} zł/kg
                </p>
              </div>

              <p className=" flex mt-2 p-2 justify-around w-full">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-around w-4/5 md:w-2/5 m-4 md:mt-28 p-2 h-3/4 border-2 border-gray-300 rounded-lg shadow-lg md:fixed md:right-0">
        <h1 className="m-4">Zapłać!</h1>
        <h2>Do załapty:</h2>
        <h2>...zł</h2>
        <div className="flex flex-row justify around">
          <button className="flex justify-around m-2 items-center w-40 rounded-lg h-12 bg-gray-300 hover:bg-gray-400">
            Anuluj
          </button>
          <button className="flex justify-around m-2 items-center w-40 rounded-lg h-12 bg-blue-300 hover:bg-blue-400">
            Zapłać
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
