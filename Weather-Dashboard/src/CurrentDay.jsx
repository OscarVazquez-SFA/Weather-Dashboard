import React, { use, useEffect } from "react";
import CurrentDayServices from "./API services/CurrentDayServices";
import { farenheitToCelsius } from "./Helper Functions/helperFunctions.jsx";
import {handleCheckBoxChange} from "./Helper Functions/helperFunctions.jsx";
import { mphToKph } from "./Helper Functions/helperFunctions.jsx";


export default function CurrentDay({ isFahrenheit, toggleTemp, coordinates, city, loading, dt, setDt, weatherData, farenheitType, setFarenheitType, isDark}) {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY
    // have at least a state that controls whether the current temp is in Fahrenheit or Celsius (handle logic)
    /* use effect is needed to fetch the weather data from the API (depending on the state of the farenheit/celsius toggle, we 
    will need to fetch the data in the correct unit).
    */
    // use effect to fetch the current weather data from the API



    // grab the response as json object, then set the state with the appropriate data (temperature, humidity, wind speed, etc.)
    // dont forget to remove any side effects when the component unmounts

    // humidity, wind speed 

    useEffect(() => async () => {
        const test = await CurrentDayServices(coordinates.lat, coordinates.lon, api_key, isFahrenheit);

    }, [coordinates, isFahrenheit]);

    // remove theme controller here in order to make room for the current day card (Farenheit/Celsius toggle will be in the App component)
    function handleDayOfWeek() {
        const timestamp = dt;
        const date = new Date(timestamp * 1000);
        const formatted = date.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });
        console.log(formatted);

    }
    //handleDayOfWeek();
    //console.log(weatherData);

    
    let displayTemp =  isFahrenheit ? farenheitToCelsius(weatherData?.main?.temp, 'C') : weatherData?.main?.temp?.toFixed(0);
    let displayWindSpeed = isFahrenheit ? mphToKph(weatherData?.wind?.speed, 'KPH') : weatherData?.wind?.speed?.toFixed(0);

    //console.log(displayTemp);
    
    return (
        <>

            <div className="card bg-base-100 image-full w-full shadow-sm flex-1 ">
                

                {/*  */}
                <figure>
                    <img
                        src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`}
                        alt="Shoes"
                        width="50%"
                        height="50%" />
                </figure>
                



                <div className="card-body justify-center items-center">
                    {weatherData ? (
                        <>
                            {weatherData?.dt && (
                                <h1 className={`card-title text-5xl ${isDark ? "text-blue-500" : "text-purple-500"}`}>
                                    Time of Day:{" "}
                                    {new Date(weatherData.dt * 1000).toLocaleString("en-US", {
                                        weekday: "long",
                                        hour: "numeric",
                                        minute: "numeric",
                                        hour12: true,
                                    })}
                                </h1>
                            )}
                            {weatherData?.main?.temp && (
                                <h1 className={`card-title text-5xl ${isDark ? "text-blue-500" : "text-purple-500"}`}>
                                    Current Temp: {displayTemp}° {isFahrenheit ? 'C' : 'F'}
                                </h1>
                            )}
                            {weatherData?.main?.humidity && (
                                <h1 className={`card-title text-5xl ${isDark ? "text-blue-500" : "text-purple-500"}`}>
                                    Humidity level: {weatherData.main.humidity}%
                                </h1>
                            )}
                            {weatherData?.wind?.speed && (
                                <h1 className={`card-title text-5xl ${isDark ? "text-blue-500" : "text-purple-500"}`}>
                                    Wind Speed: {displayWindSpeed} {isFahrenheit ? 'KPH' : 'MPH'}
                                </h1>
                            )}
                            {weatherData?.weather?.[0]?.main && (
                                <h1 className={`card-title text-5xl ${isDark ? "text-blue-500" : "text-purple-500"}`}>
                                    Weather Description: {weatherData.weather[0].main}
                                </h1>
                            )}
                        </>
                    ) : (
                        <p>Enter a city for weather information please.</p>
                    )}
                </div>


            </div>
        </>

    )
}