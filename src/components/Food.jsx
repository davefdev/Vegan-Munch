import React, {useState} from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);
  
  return (
    <div className="max-w-[1640x] mx-auto px-4 py-12">
      <h1 className=" text-orange-500 text-4xl font-bold text-center">
        Top rated food
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter type</p>
          <div className="flex justify-between flex-wrap">
            <button className="m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              All
            </button>
            <button className="m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              Burger{" "}
            </button>
            <button className="m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              Pasta
            </button>
            <button className="m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              Spagheti
            </button>
            <button className="m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              Hotdog
            </button>
          </div>
        </div>

        <div>
          <p className="font-bold text-gray-700">Filter price</p>
          <div className="flex justify-between max-w-[]390px w-full">
            <button className="m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              £
            </button>
            <button className="m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              ££{" "}
            </button>
            <button className="m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              £££
            </button>
            <button className="m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              ££££
            </button>
            <button className="m-1 border-orange-600 text-orange-500 hover:bg-orange-600 hover:text-white">
              £££££
            </button>
          </div>
        </div>
      </div>

      {/*Display food*/}
      <div>
        {foods.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Food;
