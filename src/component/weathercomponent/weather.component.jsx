import React from 'react';

/**
* @author
* @function Weather
**/


const Weather = (props) => {
  return(
    <div className="container text-light">
        <div className="cards pt-4">
            <h1>{props.city}</h1>
            <h5 className="py-4">
            {props.city?<img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather-icon"/>:null}
            </h5>
            {props.temp_celsius?<h1 className="py-2">{props.temp_celsius}&deg;C</h1>:null}

            {
                minmaxtemp(props.temp_min,props.temp_max)
            }
            <h4 className="py-4">{props.description}</h4>
        </div>
    </div>
   )

 }

 function minmaxtemp(min,max){

    if(min && max)
     {return (
         <h3>
             <span className="px-4">Min {min}&deg;C</span>
             <span className="px-4">Max {max}&deg;C</span>
         </h3>
     )}
 }
export default Weather;