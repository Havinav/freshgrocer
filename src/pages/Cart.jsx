import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Cart = ({ cartFlag }) => {
  return (
    <div className=" bg-black/50 flex h-screen bg-white w-1/4 fixed right-0 top-0">
      <span
          onClick={() => cartFlag(false)}
          className="text-red-500 cursor-pointer mt-2 ml-2 text-2xl"
        >
          <IoClose />
        </span>
      <div className="flex mt-5 p-2 bg-transparent justify-center">
        <span className="text-2xl font-bold text-green-800 ml-10">My Cart</span>
      </div>
    </div>
  );
};

export default Cart;
