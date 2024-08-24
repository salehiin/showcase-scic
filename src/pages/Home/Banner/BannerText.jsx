import React from "react";

const BannerText = () => {
  return (
    <div className="absolute flex items-center rounded-xl h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className="text-white space-y-7 pl-12 w-1/2">
        <h2 className="text-6xl font-bold">
          Affordable Price For Car Servicing
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque
          itaque, nesciunt consequatur laboriosam cupiditate neque in!
        </p>
        <div>
          <button className="btn btn-primary mr-5">Discover More</button>
          <button className="btn btn-outline btn-secondary">
            Latest Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerText;
