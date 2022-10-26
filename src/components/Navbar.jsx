import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="max-w-[1640x] mx-auto flex justify-between items-center p-5">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={32} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl  px-2">
          Vegan <span className="font-bold">Munch</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-300 rounded-full p-1 text[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Collection</p>
        </div>
      </div>
      {/*search input*/}
      <div className="bg-gray-300 flex items-center px-2  w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search foods"
        />
      </div>

      {/*Cart button*/}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" />
        cart
      </button>
    </div>
  );
};

export default Navbar;
