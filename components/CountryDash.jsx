import React, { useState, useEffect } from "react";
import ClockCity from "./ClockCity";
const CountryDash = () => {
   const cities = [
      { name: "America", timezone: "America/New_York" },
      { name: "India", timezone: "Asia/Kolkata" },
      { name: "Pakistan", timezone: "Asia/Karachi" },
   ];
   return (
      <>
         <div className="parentDiv flex items-center justify-center w-full h-screen gap-x-10 bg-gradient-to-r from-gray-800 to-gray-600">
            {cities.map((item, index) => (
               <div key={index}>
                  <ClockCity city={item}></ClockCity>
               </div>
            ))}
         </div>
      </>
   );
};
export default CountryDash;
