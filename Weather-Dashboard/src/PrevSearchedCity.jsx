import { useState, useEffect } from "react";

export default function PrevSearchedCity({ handlePrevCityClick }) {
  const cityArray = JSON.parse(localStorage.getItem("lastSearchedCity")) || [];

  return (
    <div className="flex flex-col items-center mt-6">
      <h2 className="text-sm text-gray-400 mb-2">Recently Searched Cities:</h2>

      <div className="flex flex-wrap justify-center gap-2">
        {cityArray.length > 0 ? (
          cityArray.map((city, index) => (
            <button
              key={index}
              onClick={() => handlePrevCityClick(city)}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
            >
              {city}
            </button>
          ))
        ) : (
          <p className="text-gray-500">No previously searched cities yet. Give it a try!</p>
        )}
      </div>
    </div>
  );

}
