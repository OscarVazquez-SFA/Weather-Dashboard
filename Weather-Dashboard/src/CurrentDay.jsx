import React from "react";

export default function CurrentDay() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date = new Date();
    const day = weekday[date.getDay()];
    return (
       

        <div className="card bg-base-100 image-full w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{day}</h2>
                <p>temperature, wind speed, humidity percentange along with icon of the current weather (sunny, cloudy, rainy, etc)</p>
            </div>
        </div>
    )
}