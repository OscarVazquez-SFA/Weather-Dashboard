import React from "react";

export default function SearchForCity() {
    // this component will try and handle the search for a valid city
    // will also attempt to fetch the weather data for that city
    // potentially loading state here rather than using the loading state in the App component

    // local storage to save the searched city
    // save last city in local storage so that when user wants to see the weather for that city again, it will be available for user 

    
    return(
        <input type="text" placeholder="Type here" className="input"/>
    )
}