import { useState, useEffect } from "react";

export default function PrevSearchedCity({handlePrevCityClick}) {
    const cityArray = JSON.parse(localStorage.getItem("lastSearchedCity")) || [];

    return (
        <div className="prev-searched-city">
            <h2>Previous Searched City:</h2>
            <div className="city-buttons">
                {cityArray.length > 0 ? (
                    cityArray.map((city, index) => (
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"key={index} onClick={()=>handlePrevCityClick(city)}>
                            {city}
                        </button>
                    ))
                ) : (
                    <p>No previously searched cities.</p>
                )}
            </div>
        </div>
    );
}
