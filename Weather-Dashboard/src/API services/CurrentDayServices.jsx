

export default async function CurrentDayServices(lat, lon, api_key, isFahrenheit) {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=${isFahrenheit ? 'imperial' : 'metric'}`);
    if (!result.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await result.json();
    return data;
} 