import React, { useState } from "react";
import Login from "./Login";
import Cart from "./Cart";
import { DashboardJumbtron } from "./DashboardJumbtron";
import Cards from "./Cards";
import data from "../assets/Categrioes.json";
import sc from "../assets/SubCategrioes.json";
import Card from "./Card";
import Footer from "./Footer";

const Navbar = () => {
  const [loginFlag, setLoginFlag] = useState(false);
  const [cartFlag, setCartFlag] = useState(false);
  return (
    <>
      <nav class="fixed top-0 w-full bg-white border-gray-200 dark:bg-gray-900 shadow-lg rounded-lg">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfJTGjEEGIqJ1GYvKkiNgaq7m2n_nUQsqEg&s"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfJTGjEEGIqJ1GYvKkiNgaq7m2n_nUQsqEg&s"
              class="h-8 shadow-lg rounded-lg"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <span class="text-blue-700 dark:text-blue-500">Fresh</span>
              <span class="text-red-500 dark:text-white">Cart</span>
            </span>
          </a>
          <div class="flex items-center text-xmlns font-semibold space-x-6 rtl:space-x-reverse">
            <a
              href="#"
              class="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Search
            </a>
            <a
              href="#"
              class="text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>setLoginFlag(!loginFlag)}
            >
              Login
            </a>
            <a
              href="#"
              class="text-blue-600 dark:text-blue-500 hover:underline shadow-lg " onClick={()=>setCartFlag(!cartFlag)}
            >
              <button
                type="button"
                class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Cart
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                  0
                </div>
              </button>
            </a>
          </div>
        </div>
      </nav>
      <div className="mt-20 px-4">
        <DashboardJumbtron />
      </div><br/>
      <div className="flex grid px-4">
         <Cards/>
      </div><br/>
      <div className="flex grid px-4">
      <span className="text-2xl font-bold text-black">Categories</span>
       <div className="grid jestify-center items-center grid-cols-2 md:grid-cols-5 gap-4">
       {data.map((item) => {
              return (
                <div className="">
        <div class="">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src={item.image}
              alt=""
            />
          </div>
        </div>
      </div>
              );
            })}
       </div>
      </div>
      <br/>
      <div>
        <Footer/>
      </div>
      <div className="">
        {loginFlag && (
          <div>
            <Login loginFlag={setLoginFlag} />
          </div>
        )}
      </div>
      <div className=" text-red-900">
        {cartFlag && <Cart cartFlag={setCartFlag} />}
      </div>
    </>
  );
};

export default Navbar;
