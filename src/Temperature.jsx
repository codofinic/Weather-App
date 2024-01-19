export default function Temperature({main}){
    let temperature=main.temp - 273.15

    return(
        <h1 style={{textAlign:"left"}}>
           {temperature.toFixed(2)} °C <img src="./sunny.svg" alt="" style={{ width: "7%",
    height: "7%"}}/>
        </h1>
    )
}