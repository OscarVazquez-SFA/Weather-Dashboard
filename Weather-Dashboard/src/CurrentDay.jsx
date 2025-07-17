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
            <div className="card-body">
                <h2 className="card-title">{targetDay}</h2>
                <p>temperature, wind speed, humidity percentange along with icon of the current weather (sunny, cloudy, rainy, etc)</p>
            </div>
        </div>
    )
}