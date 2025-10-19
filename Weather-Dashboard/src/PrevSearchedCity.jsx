import { useState, useEffect } from "react";

export default function PrevSearchedCity(city) {

    const savedCity = localStorage.getItem("lastSearchedCity")

    [prevCity, setPrevCity] = useState(savedCity || "");

    


    return (
        <div>PrevSearchedCity</div>
    )
}