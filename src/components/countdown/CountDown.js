import React, { useState, useEffect} from 'react'
import { CountDownStyles } from './CountDownStyles'



export const CountDown = () => {
   const [ timer, setTime ] = useState({})
   const launchDate = new Date("Oct 4, 2020 23:00:00").getTime();

   useEffect(() => {
      const dateCountDown = () => {
         // get todays day and time in milisec
         const now = new Date().getTime();
         //distance from now to the time
         const distance = launchDate - now;
         // days
         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
         // hours
         const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
         );
         //minutes
         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         // seconds
         const seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
         setTime({
            distance, days, hours, minutes, seconds
         })
        
      };
      const intv1 = setInterval(dateCountDown, 1000);
      if (timer.distance < 0) {
         //stop countdown
         clearInterval(intv1);
      }

      return () => clearInterval(intv1);

   }, [launchDate, timer.distance])
  
   return (
      <CountDownStyles>
         <h1 className="comingsoon">Coming soon</h1>
         <div className="countdown">
            <div>{timer.days}<span> Day</span></div>
            <div>{timer.hours}<span> Hours</span></div>
            <div>{timer.minutes}<span> Minutes</span></div>
            <div>{timer.seconds}<span> Seconds</span></div>
         </div>
      </CountDownStyles>
   )
}
