import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap5  ">

      {/*Card*/}
      <div className=" rounded-xl relative">
        {/*Overlay*/}
        <div className=" ">
          <p>Weather Hot, Food Got</p>
          <p>Through October</p>

          <button>Order now</button>
        </div>
        <img
          src="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="burrito"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
