import { useState, useEffect } from "react"; 



/*
more ppl are starting to shift to useing async/await syntax rather than promises, so we will use that here
*/
export default async function AppServices(city, api_key) {
    const result = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api_key}`);
    if (!result.ok) {
        throw new Error("AppService Comp: Network response was not ok");
    }
    const data = await result.json();
    return data;
}