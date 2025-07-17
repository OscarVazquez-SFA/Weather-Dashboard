import React from "react";

export default function CurrentDay() {

    return (
        <>

            <div className="card bg-base-100 image-full w-full shadow-sm flex-1">
                <label className="flex cursor-pointer gap-2 z-10 justify-end items-center p-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
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
                    <h1 className="card-title text-5xl" >Current day here</h1>
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