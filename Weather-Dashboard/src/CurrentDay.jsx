import React from "react";

export default function CurrentDay({ targetDay }) {

    return (
        <>
            
            <div className="card bg-base-100 image-full w-full shadow-sm flex-1">
                <label className="toggle text-base-content z-10 m-2">
                    <input type="checkbox" />
                    <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="4"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path d="M20 6 9 17l-5-5"></path>
                        </g>
                    </svg>
                    <svg
                        aria-label="disabled"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </label>


                <figure>
                    <img
                        src="https://tenor.com/view/clean-sun-beautiful-heaven-gif-19516158.gif"
                        alt="Shoes"
                        width="100%"
                        height="50%" />
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
        </>

    )
}