import React from "react";

export default function CurrentDay({targetDay}) {
    
    return (

        <div className="card bg-base-100 image-full w-full shadow-sm flex-1">
            <figure>
                <img
                    src="https://tenor.com/view/clean-sun-beautiful-heaven-gif-19516158.gif"
                    alt="Shoes" 
                    width="100%"
                    height="50%"/>
            </figure>
            <div className="card-body justify-center items-center">
                <h1 className="card-title text-5xl" >{targetDay}</h1>
                <ul className="justify-center items-center text-2xl font-bold py-2 ">
                    <li>Temp: 69°F</li>
                    <li>Humidity: 60%</li>
                    <li>Wind Speed: 15 km/h</li>
                    <li>☀️</li>
                </ul>
            </div>
        </div>
    )
}