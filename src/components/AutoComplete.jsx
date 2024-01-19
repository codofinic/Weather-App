/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import './Style/Weather.css'
import OneWeek from "./OneWeek";
import Chart from "./Chart";
import PressureHumidity from "./PressureHumidity";
import Sunrise from "./Sunrise";
import { deflt } from "./Default";
import SunriseSunset from "./SunriseSunset";
import Temperature from "../Temperature";
import { Location } from "./Location";
import { Search } from "./Search";
// import { UserData } from "./Data";

const AutoComplete = ({ options}) => {
    const [value, setValue] = useState("Pune, Maharashtra");
    const [showSuggestions, setShowSuggestions] = useState(false);
    let [searchValue,setSearch]=useState("")
    let [weatherData,setWeatherData]=useState(deflt)
    let [map,setMap]=useState(true)
    
    useEffect(()=>{
          async function fetchData(){
               let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue.toLowerCase()}&appid=dc17751ea2e801137b2c8eeb5a3111d8`);
               data=await data.json();
               console.log(weatherData);
                setWeatherData(data)
          }
          if(searchValue.length!==0)
          fetchData()
    },[searchValue])
    const suggestions = options.filter(({cityName}) => cityName.toLowerCase().includes(value.toLowerCase()))
    const handleChange = (event) => {
        setValue(event.target.value);
        setMap(false)
    }

    const handleSuggestionClick = (suggetion) => {
        setValue(suggetion);
        setSearch(suggetion);
        setShowSuggestions(false);
        setMap(true)
    }
console.log();
console.log(weatherData);
console.log(weatherData.main.pressure);
    return (
        <div className="autocomplete">
           <div className="input-box"> 
            <Location/>
            <input
                value={value}
                onChange={handleChange}
                placeholder="Search"
                onFocus={() => {
                    setShowSuggestions(true)
                }} />
                <Search/>
                </div>
             
            {showSuggestions && (
                <ul className="suggestions">
                    {suggestions.map(({cityName,cityState,Celicus,cloud,nature,img}) => (
                        <li  onClick={() => handleSuggestionClick(cityName)} key={cityName}> <span> {cityName},{cityState}</span> <span className="simg">{Celicus} {cloud}<img src={img}height={"30px"} width={"30px"} alt="" /></span></li>
                    ))}
                </ul>
            )}

          <OneWeek/>
         < Temperature main={weatherData.main}/>
          <Chart toggle={map}  />
          <PressureHumidity pressure={weatherData.main.pressure} humidity={weatherData.main.humidity}/>
          <SunriseSunset UserData={weatherData.sys}/>
         <Sunrise UserData={weatherData.sys}/>
        </div>
    )
};

export default AutoComplete;