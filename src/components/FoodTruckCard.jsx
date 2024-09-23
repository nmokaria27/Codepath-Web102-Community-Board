import React from "react";

const FoodTruckCard = ({ name, cuisine, image }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <img className="w-full h-48 object-cover" src={image} alt={name} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">{cuisine}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        View Menu
      </button>
    </div>
  </div>
);

export default FoodTruckCard;
