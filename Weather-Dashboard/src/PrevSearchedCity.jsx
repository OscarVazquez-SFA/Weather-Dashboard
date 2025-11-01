import { useState, useEffect } from "react";

export default function PrevSearchedCity() {

        const cityArray = JSON.parse(localStorage.getItem("lastSearchedCity")) || [];
        
        

    return (
        <div className="prev-searched-city">
            <h2>Previous Searched City:</h2>
            <p>{cityArray}</p>
        </div>
    )
}