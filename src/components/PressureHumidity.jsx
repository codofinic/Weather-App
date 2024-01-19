import './Style/PressureHumidity.css'
export default function PressureHumidity({pressure,humidity}){
    console.log(pressure);
    return(
       <div>
        <div id='prhu'>
            <div id='pressure'>
               <div style={{fontWeight:"bold"}}>Pressure</div>
               <div>{pressure}hpa</div>
            </div>
            <div id='humidity'>
                 <div style={{fontWeight:"bold"}}>Humidity</div>
                 <div>{(humidity/100)*100}%</div>
            </div>
        </div>
       </div>
    )
}