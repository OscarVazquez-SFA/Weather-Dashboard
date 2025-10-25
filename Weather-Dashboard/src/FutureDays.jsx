
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
    // staetes for highs and lows 

    /* discuss with micheci about whether or not to give the farenheit/celsius state to App component and then pass it down as a prop 
    to the Future Days and Currend Day components. This way we can have a single state that controls the temperature unit across the app.
    */

    // This function will fetch the weather data from the API
    // You can use fetch or axios to make the API call
    // Example: fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`)

    /* use effect is needed to fetch the weather data from the API (depending on the state of the farenheit/celsius toggle, we 
    will need to fetch the data in the correct unit).
    */

    // const api_call = `http://api.openweathermap.org/geo/1.0/direct?q=Dallas&limit={limit}&appid=${api_key}`
    const displayedListMax = filteredList.map(item => item.main.temp_max);
    const displayedListMin = filteredList.map(item => item.main.temp_min);
    //console.log("This is the max temp at noon for the upcoming days: ", displayedListMax);
    //console.log("This is the min temp at noon for the upcoming days: ", displayedListMin);


    // let displayMaxTemp =  isFahrenheit ? farenheitToCelsius(filteredList, 'C') : futureWeatherData?.list[0]?.main?.temp_max.toFixed(0);
    //let displayMinTemp =  isFahrenheit ? farenheitToCelsius(futureWeatherData?.list[0]?.main?.temp_min, 'C') : futureWeatherData?.list[0]?.main?.temp_min.toFixed(0);


    return (
        <nav className="flex justify-center items-center mt-4">
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


    )
}