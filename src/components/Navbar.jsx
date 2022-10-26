import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="max-w-[1640x] mx-auto flex justify-between items-center p-5">
      <div>
        <div>
          <AiOutlineMenu size={32} />
        </div>
        <h1>
          best <span>Munch</span>
        </h1>
        <div>
          <p>Delivery</p>
          <p>Collection</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
