import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherCard from './component/WeatherCard'
import {Container,Row,Col,Card} from 'reactstrap';
import './component/card.css';
import { BsDropletFill,BsCompassFill,BsCloudFog2Fill } from "react-icons/bs";
import SearchCityWeather from './component/SearchCityWeather'
function App() {
  const[weatherinfo,setWeatherInfo]=useState('')
  const[location,setLocation]=useState('')
  const padNum =(num)=>{
       const stringNum=num+'';
       const stringlen=stringNum.length;

       if(stringlen===1){
         return '0' +stringNum;
       }else{
         return stringNum;
       }
  }
 // const locationKey='152909_PC';
  const[locationKey,setLocationKey]=useState('')
  const keyapi='nA57cWPOUEKEiBtMjTXd8CBISxKrIrJC'
  useEffect(() =>{
    
if(locationKey){
  console.log(locationKey)
  fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${locationKey}?apikey=${keyapi}`
    )
    .then(res=>res.json())
    .then(res=>{
      setWeatherInfo(res.DailyForecasts
      .map(df=>{
      return{
        min:df.Temperature.Minimum.Value,
        max:df.Temperature.Maximum.Value,
        weatherType:df.Day.IconPhrase,
        weatherkey:padNum(df.Day.Icon),
      }
    })
    )
  });
}

  },[locationKey])
  return (
    <div className="p-3 background">
      <div>
        <SearchCityWeather onCityFound={cityinfo=>{
          setLocationKey(cityinfo.key)
          setLocation(cityinfo.name+',',cityinfo.state)
        }}/>
      </div>

      <Card className="mb-3">
        <div>
            <div className="p-3">
            <h5>Current Weather</h5>

            </div>
            <div className="current_weather">
              <div className="current_status">
                 <div className="currentcolor">
                    <h5>{location}</h5>
                    <img/>
                    <p>clear sky</p>
                  </div> 
                  <h1 className="degree">36</h1>
              </div>
              <div className="icon_weather">
              <p>Feels like 34</p>
              <div className="bslog">
                <div  className="bslog"><i class="fas fa-long-arrow-alt-down"></i><h6>37</h6></div>
                <div className="bslog"> <i class="fas fa-long-arrow-alt-up"></i><h6>34</h6></div>
             </div>
                <div className="bslog"><BsDropletFill style={{fontSize:"25px",color:'grey'}}/><p>Humadity</p><h6></h6></div>
                 <div className="bslog"><BsCloudFog2Fill style={{fontSize:"25px",color:'grey'}}/><p>Wind</p><h6></h6></div>
                 <div className="bslog"><BsCompassFill style={{fontSize:"25px",color:'grey'}}/><p>Pressure</p> <h6></h6></div>
                 
              </div>
            </div>
        </div>
      </Card>
    <Card>
      <h3>Weather info</h3>
    <div className="current_weather">
   
      {!!weatherinfo && weatherinfo.map((i,index)=>(
      <div key={index}>
          <WeatherCard
           min={i.min} 
           max={i.max}
           weatherType={i.weatherType}
           weatherkey={i.weatherkey}
           />
      </div>
      
      ))}
  
    </div>
    </Card>
    </div>
  );
}

export default App;
