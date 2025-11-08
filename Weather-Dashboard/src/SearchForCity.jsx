import React from "react";
import CurrentDayServices from "./API services/CurrentDayServices";
import AppServices from "./API services/AppService.jsx";
import FutureDaysServices from "./API services/FutureDaysServices.jsx";


export default function SearchForCity({ city, setCity, coordinates, isFahrenheit, setCoordinates, setIsLoading, setWeatherData, weatherData, setFutureWeatherData, setUserSubmitted, recentCity, setRecentCity }) {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY
    // this component will try and handle the search for a valid city
    // will also attempt to fetch the weather data for that city
    // potentially loading state here rather than using the loading state in the App component

    // local storage to save the searched city
    // localStorage.setItem("lastSearchedCity", city);
    // const lastSearchedCity = localStorage.getItem("lastSearchedCity");
    // console.log(lastSearchedCity); // will log the last searched city
    // save last city in local storage so that when user wants to see the weather for that city again, it will be available for user 


    // when searching/submitting for a city, make sure that successful information is received from the API before setting/saving that 
    // city in local storage (imagine it gets wrong info, that means we will display wrong info/errors to the user)
    // since local storage is seen in all components and not tied down to one, then it can be accessed in any component. 

    async function handleSubmit(event) {
        event.preventDefault();
        //console.log(city);
        if (!city) return;

        setIsLoading(true);
        const getCoordinates = async () => {
            try {
                const dataFromGeocode = await AppServices(city, api_key);

                //console.log(dataFromGeocode[0].lat, dataFromGeocode[0].lon);
                if (dataFromGeocode.length === 0) {
                    console.error("No data found for the specified city", city);
                    setIsLoading(false);
                    return;
                }
                /*
                setCoordinates({
                    lat: dataFromGeocode[0].lat,
                    lon: dataFromGeocode[0].lon
                });
                */
                const obj = {
                    lat: dataFromGeocode[0].lat,
                    lon: dataFromGeocode[0].lon
                }
                return obj
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        const test = await getCoordinates();
        //console.log(coordinates);
        console.log(test);

        const currentInfo = await CurrentDayServices(test.lat, test.lon, api_key, isFahrenheit);
        const futureInfo = await FutureDaysServices(test.lat, test.lon, api_key, isFahrenheit);
        setFutureWeatherData(futureInfo);
        console.log("Future Info:", futureInfo);
        setWeatherData(currentInfo);
        console.log("current Info: ", currentInfo);

        const cityArray = JSON.parse(localStorage.getItem("lastSearchedCity")) || [];
        const newCity = city.trim();
        let updatedCityArray;

        // do a check here 
        if (cityArray.length === 6) {
            const trimmedArray = cityArray.slice(1); // remove the oldest entry
            updatedCityArray = [...trimmedArray, newCity];
        }
        else {
            updatedCityArray = [...cityArray, newCity];
        }




        localStorage.setItem("lastSearchedCity", JSON.stringify(updatedCityArray));
        //setRecentCity(updatedCityArray); // Update state to re-render

        setIsLoading(false);
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex justify-center items-center gap-2 mt-4"
            >
                <input
                    onChange={(event) => setCity(event.target.value)}
                    value={city}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-64"
                />
                <button className="btn btn-neutral">Submit</button>
            </form>
        </>
    );

}