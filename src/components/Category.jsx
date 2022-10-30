import React from "react";
import { categories } from "../data/data";

const Category = () => {
  return (
    <div className="max-w-[1640px] px-4 py-12 m-auto">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top rated items</h1>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg flex justify-between items-center">
            <h2 className="font-bold px-2 sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20 h-20 p-2 object-cover rounded-2xl"></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
