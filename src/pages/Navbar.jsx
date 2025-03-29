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
      <div className="flex fixed top-0 w-full bg-white text-black shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-orange-500">Fresh</span>
            <span className="text-xl font-bold text-green-500">Grocer</span>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Search for products"
              className="border h-9 w-100 rounded-lg border-red-300 px-5"
            />
          </div>

          <div>
            <span
              onClick={() => setLoginFlag(!loginFlag)}
              className="text-red-500 cursor-pointer"
            >
              Login
            </span>
            &emsp;&emsp;&emsp;&emsp;
            <span onClick={() => setCartFlag(!cartFlag)}>
              <button className="bg-green-900 text-white px-4 py-2 rounded-lg cursor-pointer">
                My Cart 1
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="">
        {loginFlag && (
          <div>
            <Login loginFlag={setLoginFlag} />
          </div>
        )}
      </div>
      <div className="mt-20 p-1 rounded-lg">
        <div>
          <DashboardJumbtron />
        </div>

        <div>
          <Cards />
        </div>
        <div className="p-2">
          <span className="text-2xl font-bold text-black">Categories</span>
          <div className="flex">
            {data.map((item) => {
              return (
                <div className="  rounded-xl " key={item.id}>
                  <div className="p-5 ">
                    <span className="text-2xl font-bold ">{item.name}</span>
                    <br />
                    <span className="text-lg">{item.description}</span>
                  </div>
                  <div className="flex p-1 -mt-17 justify-end">
                    <img
                      src={item.image}
                      alt="grocery"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <span className="text-2xl font-bold p-2 text-black">
            Dairy, Bread & Eggs
          </span>
          <Card subData={sc} value={1} />
          <span className="text-2xl font-bold p-2 text-black">
            Cool Drinks & Juices
          </span>
          <Card subData={sc} value={5} />
          <span className="text-2xl font-bold p-2 text-black">
            Snacks & Munchies
          </span>
          <Card subData={sc} value={6} />
          <span className="text-2xl font-bold p-2 text-black">
            Breakfast & Instant Food
          </span>
          <Card subData={sc} value={7} />
          <span className="text-2xl font-bold p-2 text-black">
            Sweet & Tooth
          </span>
          <Card subData={sc} value={8} />
          <span className="text-2xl font-bold p-2 text-black">
            Tea, Coffee & Health Drink
          </span>
          <Card subData={sc} value={9} />
          <span className="text-2xl font-bold p-2 text-black">
            Atta, Rice & Dal
          </span>
          <Card subData={sc} value={10} />
        </div>
      </div>
      <div className=" text-red-900">
        {cartFlag && <Cart cartFlag={setCartFlag} />}
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Navbar;
