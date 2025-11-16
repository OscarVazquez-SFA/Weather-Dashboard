
import React from "react";
import FutureDaysServices from "./API services/FutureDaysServices";
import { farenheitToCelsius } from "./Helper Functions/helperFunctions.jsx";
import { handleCheckBoxChange } from "./Helper Functions/helperFunctions.jsx";
import { useEffect } from "react";




export default function FutureDays({ isFahrenheit, toggleTemp, futureWeatherData, city, coordinates, loading, farenheitType, setFarenheitType, filteredList }) {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY
    const lat = 0;
    const lon = 0;

    useEffect(() => async () => {
        const test = await FutureDaysServices(coordinates.lat, coordinates.lon, api_key, isFahrenheit);

    }, [coordinates, isFahrenheit]);

    // const api_call = `http://api.openweathermap.org/geo/1.0/direct?q=Dallas&limit={limit}&appid=${api_key}`
    const displayedListMax = filteredList.map(item => item.main.temp_max);
    const displayedListMin = filteredList.map(item => item.main.temp_min);
    //console.log("This is the max temp at noon for the upcoming days: ", displayedListMax);
    //console.log("This is the min temp at noon for the upcoming days: ", displayedListMin);


    return (
        <nav className="flex justify-center items-center mt-8 mb-12">
            <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-10 p-4 ml-50%">
                {filteredList.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <h1 className="text-2xl font-bold text-white">
                            {new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}
                        </h1>
                        <div className="text-white text-lg font-semibold justify-center items-center">
                            <ul>
                                <li>High: {item.main.temp_max}° {isFahrenheit ? 'C' : 'F'}</li>
                                <li>Low: {item.main.temp_min}° {isFahrenheit ? 'C' : 'F'}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </nav>
    );

}