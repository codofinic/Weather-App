import './Style/SunriseSet.css'
export default function SunriseSunset({UserData}){
    let timestamp1=UserData.sunrise
    let timestamp2=UserData.sunset
    
    let date1=new Date(timestamp1 * 1000);
    let date2=new Date(timestamp2 * 1000);
    let riseHour=date1.getHours()
    let riseMinutes=date1.getMinutes()
    let setHour=date2.getHours()
    let setMinutes=date2.getMinutes()
       return(
        <div>
        <div id='riseset'>
            <div id='sunrise'>
               <div style={{fontWeight:"bold"}}>Sunrise</div>
               <div>{riseHour}:{riseMinutes}:am</div>
            </div>
            <div id='sunset'>
                 <div style={{fontWeight:"bold"}}>Sunset</div>
                 <div>{setHour}:{setMinutes}:pm</div>
            </div>
        </div>
       </div>
       )
}