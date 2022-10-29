import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/*OVerlay*/}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center rounded-2xl">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold">
            Natural <span className="text-orange-500">Wholesome</span>{" "}
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold">
            Foods <span className="text-orange-500">Delivered</span>{" "}
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover rounded-2xl"
          src="https://images.pexels.com/photos/3296903/pexels-photo-3296903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
