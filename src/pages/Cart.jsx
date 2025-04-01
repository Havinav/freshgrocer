import React from "react";
import { FaArrowLeft } from "react-icons/fa";


const Cart = ({ cartFlag }) => {
  return (
    <div className=" flex h-full bg-white md:w-1/4 w-1/2 fixed right-0 top-0 ">
      <div className="flex  py-5 gap-7 shadow=lg">
      <span
          onClick={() => cartFlag(false)}
          className="text-red-500 cursor-pointer mt-1 text-2xl"
        >
          <FaArrowLeft />
        </span>
        <span className="text-green-900 font-bold text-center mt-1">My Cart</span><hr/>
      </div>
      
    </div>
  );
};

export default Cart;
