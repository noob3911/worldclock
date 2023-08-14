import React, { useState, useEffect } from "react";

const ClockCity = ({ city }) => {
   const [time, setTime] = useState(new Date());

   useEffect(() => {
      let timerId = setInterval(() => {
         const now = new Date();
         setTime(now);
      }, 1000);

      return () => clearInterval(timerId);
   }, []);

   const formatDate = time.toLocaleTimeString("en-us", {
      timeZone: city.timezone,
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
   });

   return (
      <>
         <div className="flex items-center justify-center w-full ">
            <div className="w-48 h-48 flex bg-white items-center justify-center flex-col rounded-full shadow-md">
               <div className="text-2xl font-sans mb-2">{city.name}</div>
               <div className="text-md font-medium">{formatDate}</div>
            </div>
         </div>
      </>
   );
};
export default ClockCity;
