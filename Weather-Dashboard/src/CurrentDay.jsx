import React, { use, useEffect } from "react";
import CurrentDayServices from "./API services/CurrentDayServices";
import { farenheitToCelsius } from "./Helper Functions/helperFunctions.jsx";


export default function CurrentDay({ isFahrenheit, toggleTemp, coordinates, city, loading, dt, setDt, weatherData }) {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY
    const [farenheitType, setFarenheitType] = React.useState(false);
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

    function handleCheckBoxChange() {
        setFarenheitType(!farenheitType);
    }
    let displayTemp =  farenheitType ? farenheitToCelsius(weatherData?.main?.temp, 'C') : weatherData?.main?.temp?.toFixed(0);
    console.log(displayTemp);
    
    return (
        <>

            <div className="card bg-base-100 image-full w-full shadow-sm flex-1">
                <label className="flex cursor-pointer gap-2 z-10 justify-end items-center p-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input type="checkbox" onChange={handleCheckBoxChange} value="synthwave" className="toggle theme-controller" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>


                <figure>
                    <img
                        src="https://tenor.com/view/clean-sun-beautiful-heaven-gif-19516158.gif"
                        alt="Shoes"
                        width="100%"
                        height="50%" />
                </figure>




                <div className="card-body justify-center items-center">
                    {weatherData ? (
                        <>
                            {weatherData?.dt && (
                                <h1 className="card-title text-5xl">
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
                                <h1 className="card-title text-5xl">
                                    Current Temp: {displayTemp}° {farenheitType ? 'C' : 'F'}
                                </h1>
                            )}
                            {weatherData?.main?.humidity && (
                                <h1 className="card-title text-5xl">
                                    Humidity level: {weatherData.main.humidity}
                                </h1>
                            )}
                            {weatherData?.wind?.speed && (
                                <h1 className="card-title text-5xl">
                                    Wind Speed: {weatherData.wind.speed}
                                </h1>
                            )}
                            {weatherData?.weather?.[0]?.main && (
                                <h1 className="card-title text-5xl">
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