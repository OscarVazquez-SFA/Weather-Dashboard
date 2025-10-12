import { useState, useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrentDay from './CurrentDay.jsx'
import FutureDays from './FutureDays.jsx'
import SearchForCity from './SearchForCity.jsx'
import AppServices from './API services/AppService.jsx'
import {handleCheckBoxChange} from "./Helper Functions/helperFunctions.jsx";
import React from 'react'

function App() {
  const api_key = import.meta.env.VITE_WEATHER_API_KEY
  /*
  since both child components need lat and lon parameters to fetch the weather data, we can define them here in the App component
  and pass them down as props to the child components.
  */  
    const [weatherData, setWeatherData] = useState(null);
    const [futureWeatherData, setFutureWeatherData] = useState(null);
    //const [farenheitType, setFarenheitType] = React.useState(false);
    const [isDark, setIsDark] = React.useState(true);

  // best rule of thumb, keep state as high as possible in the component tree
  const [dt, setDt] = useState(0);
  
  const [city, setCity] = useState("");

  // make sure to display a loading state while the data is being fetched
  const [coordinates, setCoordinates] = useState({
    lat: 0, 
    lon: 0, 
  });
  // state for search input
  //const [searchInput, setSearchInput] = useState("");

  // create a state to control the temperature unit (Fahrenheit/Celsius)
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  //state to control the loading state (dont forget to add the loading/skeleton UI thing from daisyUI) 
  /* this is the loading state that will be used to display a skeleton UI while the data is being fetched
  <div className="skeleton h-32 w-32"></div>
  */
  const [isLoading, setIsLoading] = useState(true);
  //use effect here to fetch the longitude and latitude of a city 

  /*
  useEffect(()=>{
    if(!city) return;
    const getCoordinates = async () => {
      try{
        const dataFromCurrentAPI = await AppServices(city, api_key);
        if(dataFromCurrentAPI.length === 0){
          console.error("No data found for the specified city", city);
          setIsLoading(false);
          return;
      }
      setCoordinates({
        lat: dataFromCurrentAPI[0].lat,
        lon: dataFromCurrentAPI[0].lon
      });
      setIsLoading(false);
      }catch(error){
        console.error(err);
        setIsLoading(false);
      }
  };
    getCoordinates();
}, [city]);

*/

  useEffect(() => {
    //console.log("Coordinates updated:", coordinates);
    //console.log("City updated:", city);
    
  }, [coordinates]);

  //console.log(weatherData)

  function toggleContrast(event){
    event.preventDefault();
    setIsDark(prevIsDark => !prevIsDark);
  }
  console.log(isDark);

  return (
    <>
    {/*  <label className="flex cursor-pointer gap-2 z-10 justify-end items-center p-4">
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
                    <input type="checkbox" onChange={()=>handleCheckBoxChange(setIsFahrenheit)}  className="toggle" />
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
        </label>*/}

      {isLoading? <div className="skeleton h-32 w-32"></div>: <CurrentDay
        isFahrenheit={isFahrenheit}
        coordinates={coordinates}
        city={city}
        loading={isLoading}
        dt={dt}
        setDt={setDt}
        weatherData={weatherData}
        isDark={isDark}
      />}
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox"  onChange={()=>handleCheckBoxChange(setIsFahrenheit, setIsDark)} className="theme-controller" value="light" />

        {/* sun icon */}
        <svg
          className="swap-off h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className="swap-on h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>

      <SearchForCity
        city={city}
        setCity={setCity}
        coordinates={coordinates}
        isFahrenheit={isFahrenheit}
        setIsLoading={setIsLoading}
        setCoordinates={setCoordinates}
        setWeatherData={setWeatherData}
        setFutureWeatherData={setFutureWeatherData}
        weatherData={weatherData}
      />

      {!futureWeatherData ? null: <FutureDays
        isFahrenheit={isFahrenheit}
        coordinates={coordinates}
        city={city}
        loading={isLoading}
        futureWeatherData={futureWeatherData}
      />}
    </>
  )
}

export default App
