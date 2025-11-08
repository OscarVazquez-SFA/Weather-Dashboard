import { useState, useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrentDay from './CurrentDay.jsx'
import FutureDays from './FutureDays.jsx'
import SearchForCity from './SearchForCity.jsx'
import AppServices from './API services/AppService.jsx'
import { handleCheckBoxChange } from "./Helper Functions/helperFunctions.jsx";
import React from 'react'
import { handleCheckBoxChangeTemp } from "./Helper Functions/helperFunctions.jsx";
import PrevSearchedCity from './PrevSearchedCity.jsx'
import CurrentDayServices from './API services/CurrentDayServices.jsx'
import FutureDaysServices from './API services/FutureDaysServices.jsx'

function App() {
  const api_key = import.meta.env.VITE_WEATHER_API_KEY

  const [weatherData, setWeatherData] = useState(null);
  const [futureWeatherData, setFutureWeatherData] = useState(null);
  const [isDark, setIsDark] = React.useState(true);

  const [dt, setDt] = useState(0);

  const [city, setCity] = useState("");

  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lon: 0,
  });

  const [isFahrenheit, setIsFahrenheit] = useState(true);

  const [isLoading, setIsLoading] = useState(true);
  const [userSubmitted, setUserSubmitted] = useState(false);
  const [recentCity, setRecentCity] = useState("");
  const [mostRecentCitytoUseAPI, setMostRecentCitytoUseAPI] = useState("");


  useEffect(() => {
    const lastSearchedCity = localStorage.getItem("lastSearchedCity");
    setRecentCity(lastSearchedCity);
    const mostRecentCity = JSON.parse(localStorage.getItem("lastSearchedCity"));
    if (mostRecentCity && mostRecentCity.length > 0) {
      const cityToUse = mostRecentCity[mostRecentCity.length - 1];
      //console.log("Most recent city to use from local storage: ", cityToUse);
      setMostRecentCitytoUseAPI(cityToUse);
      setCity(cityToUse);
    }
  }, []);


  useEffect(() => {
    if (!mostRecentCitytoUseAPI) return;
    async function handleMostRecentCity() {
      setIsLoading(true);
      try {
        const currentInfo = await AppServices(mostRecentCitytoUseAPI, api_key);
        if (currentInfo.length === 0) {
          console.error("No data found for the specified city", mostRecentCitytoUseAPI);
          setIsLoading(false);
          return;
        }

        const obj = {
          lat: currentInfo[0].lat,
          lon: currentInfo[0].lon
        };
        setCoordinates(obj);
       // console.log("Coordinates from most recent city:", obj);

        const weatherInfo = await CurrentDayServices(obj.lat, obj.lon, api_key, isFahrenheit);
        setWeatherData(weatherInfo);
       // console.log("Current Info from most recent city: ", weatherInfo);

        const futureInfo = await FutureDaysServices(obj.lat, obj.lon, api_key, isFahrenheit);
        setFutureWeatherData(futureInfo);
       // console.log("Future Info from most recent city:", futureInfo);

      } catch (error) {
        console.error("Error handling most recent city:", error);
      } finally {
        setIsLoading(false);
      }
    }

    handleMostRecentCity();

    //console.log("UseEffect ran. Stuff in Local Storage: ", lastSearchedCity);
    // this useEffect will act as componentDidMount to set the last searched city when the app loads
    // add a way for the user to see weather for ALL cities within local storage
  }, [mostRecentCitytoUseAPI]);

  function toggleContrast(event) {
    event.preventDefault();
    setIsDark(prevIsDark => !prevIsDark);
  }

  function testNoon(string) {
    return string?.includes("12:00:00");
  }

  const filteredList = futureWeatherData?.list.filter(item => testNoon(item.dt_txt));
 
  const handlePrevCityClick = (city) => {
    if (!city) return;
    async function handleMostRecentCity() {
      setIsLoading(true);
      try {
        const currentInfo = await AppServices(city, api_key);
        if (currentInfo.length === 0) {
          console.error("No data found for the specified city", city);
          setIsLoading(false);
          return;
        }

        const obj = {
          lat: currentInfo[0].lat,
          lon: currentInfo[0].lon
        };
        setCoordinates(obj);
       // console.log("Coordinates from most recent city:", obj);

        const weatherInfo = await CurrentDayServices(obj.lat, obj.lon, api_key, isFahrenheit);
        setWeatherData(weatherInfo);
       // console.log("Current Info from most recent city: ", weatherInfo);

        const futureInfo = await FutureDaysServices(obj.lat, obj.lon, api_key, isFahrenheit);
        setFutureWeatherData(futureInfo);
       // console.log("Future Info from most recent city:", futureInfo);

      } catch (error) {
        console.error("Error handling most recent city:", error);
      } finally {
        setIsLoading(false);
      }
    }

    handleMostRecentCity();
  }
  
  return (
    <>
      <label className="flex cursor-pointer gap-2">
        <span className="label-text">C</span>
        <input type="checkbox" onClick={() => handleCheckBoxChangeTemp(setIsFahrenheit)} className="toggle" />
        <span className="label-text">F</span>
      </label>

      {
          weatherData ?
            <CurrentDay
              isFahrenheit={isFahrenheit}
              coordinates={coordinates}
              city={city}
              loading={isLoading}
              dt={dt}
              setDt={setDt}
              weatherData={weatherData}
              isDark={isDark}
            /> : <p>not working</p>}

      <PrevSearchedCity
      handlePrevCityClick={handlePrevCityClick}
      /> 

      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" onChange={() => handleCheckBoxChange(setIsDark)} className="theme-controller" value="light" />

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
        setUserSubmitted={setUserSubmitted}
        recentCity={recentCity}
        setRecentCity={setRecentCity}
      />

      {!futureWeatherData ? null : <FutureDays
        isFahrenheit={isFahrenheit}
        coordinates={coordinates}
        city={city}
        loading={isLoading}
        futureWeatherData={futureWeatherData}
        filteredList={filteredList}
      />}

      
    </>
  )
}

export default App
