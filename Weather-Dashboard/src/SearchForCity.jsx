import React from "react";

export default function SearchForCity({city, setCity}) {
    // this component will try and handle the search for a valid city
    // will also attempt to fetch the weather data for that city
    // potentially loading state here rather than using the loading state in the App component

    // local storage to save the searched city
        // localStorage.setItem("lastSearchedCity", city);
        // const lastSearchedCity = localStorage.getItem("lastSearchedCity");
        // console.log(lastSearchedCity); // will log the last searched city
    // save last city in local storage so that when user wants to see the weather for that city again, it will be available for user 
    function handleSubmit(event){
        event.preventDefault();
        //console.log(city);
        console.log("New val: ", city);
    }
    return(
        <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input onChange={(event)=>{setCity(event.target.value)}} value={city} type="text" placeholder="Type here" className="input"/>
            <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Submit</button>
        </form>
        </>
       
    )
}