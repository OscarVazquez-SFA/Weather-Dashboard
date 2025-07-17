import React from "react";
import CurrentDay from "./CurrentDay";

export default function FutureDays({ targetDay, date, weekday }) {

    
    return (
        
        
        
        <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4 flex-auto">
            <div className="carousel-item">
                <h1 className="text-2xl font-bold text-white">{targetDay = weekday[(date.getDay()+1) % weekday.length]}</h1>
            </div>
             <div className="carousel-item">
                <h1 className="text-2xl font-bold text-white">{targetDay = weekday[date.getDay()+2 % weekday.length]}</h1>
            </div>
            <div className="carousel-item">
                <h1 className="text-2xl font-bold text-white">{targetDay = weekday[(date.getDay()+3) % weekday.length]}</h1>
            </div>
            <div className="carousel-item">
                <h1 className="text-2xl font-bold text-white">{targetDay = weekday[(date.getDay()+4) % weekday.length]}</h1>
            </div>
            <div className="carousel-item">
                <h1 className="text-2xl font-bold text-white">{targetDay = weekday[(date.getDay()+5) % weekday.length]}</h1>
            </div>
        </div>
        
    )
}