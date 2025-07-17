import React from "react";
import CurrentDay from "./CurrentDay";


export default function FutureDays({ targetDay, date, weekday }) {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY
    const lat = 0;
    const lon = 0;

    

    return (
        <nav className="flex justify-center items-center mt-4">
            <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-10 p-4 ml-50%">
                <div className="carousel-item">
                    <h1 className="text-2xl font-bold text-white">Friday</h1>
                    <div className="text-white text-lg font-semibold justify-center items-center">
                        <ul>
                            <li>H: 85°F</li>
                            <li>L: 70°F</li>
                        </ul>
                    </div>
                </div>
                <div className="carousel-item">
                    <h1 className="text-2xl font-bold text-white">2nd day Here!</h1>
                </div>
                <div className="carousel-item">
                    <h1 className="text-2xl font-bold text-white">3rd day her!</h1>
                </div>
                <div className="carousel-item">
                    <h1 className="text-2xl font-bold text-white">4th day here!</h1>
                </div>
                <div className="carousel-item">
                    <h1 className="text-2xl font-bold text-white">5th day here!</h1>
                </div>
            </div>
        </nav>


    )
}