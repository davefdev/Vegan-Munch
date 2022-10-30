import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 md:grid grid-cols-3 gap-5">
      
      {/*Card*/}
      <div className="rounded-2xl relative my-1 ">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/40 rounded-2xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            No animal products used
          </p>
          <p className="px-2">Whatsoever!</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order now
          </button>
        </div>
        <img
          className="max-h-[200px] w-full object-cover rounded-2xl"
          src="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="burrito"
        />
      </div>

      {/*Card*/}
      <div className="rounded-2xl relative my-1">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/40 rounded-2xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New deals</p>
          <p className="px-2">Weekly</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order now
          </button>
        </div>
        <img
          className="max-h-[200px] w-full object-cover rounded-2xl"
          src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="pasta"
        />
      </div>

      {/*Card*/}
      <div className="rounded-2xl relative my-1">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/40 rounded-2xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Fresh, local produce</p>
          <p className="px-2">Cooked to perfection</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order now
          </button>
        </div>
        <img
          className="max-h-[200px] w-full object-cover rounded-2xl"
          src="https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hummus"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
