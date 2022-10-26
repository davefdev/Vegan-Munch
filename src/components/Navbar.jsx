import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="max-w-[1640x] mx-auto flex justify-between items-center p-5">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={32} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl  px-2">
          Best <span className="font-bold">Munch</span>
        </h1>
        <div className="hidden lg:flex">
          <p>Delivery</p>
          <p>Collection</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
