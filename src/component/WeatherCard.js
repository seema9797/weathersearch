import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Card} from 'reactstrap';
import './card.css'
import { BsDropletFill,BsCompassFill } from "react-icons/bs";



const WeatherCard = ({min,max,weatherType,weatherkey}) => {
  
  //const{upadteCity,fetchWeather}=props
    
  return (
    <div className="background">
      <div className="p-3">
      {/* <div className="mb-3">
      <input type="text" placeholder="Type Keywords to find answers"/>
      </div> */}
{/* 
      <Card className="mb-3">
        <div>
            <div className="p-3">
            <h5>Current Weather</h5>

            </div>
            <div className="current_weather">
              <div className="current_status">
                 <div>
                    <p>Paris</p>
                    <p>clear sky</p>
                  </div> 
                  <h3>36</h3>
              </div>
              <div className="icon_weather">
              <p>Feels like 34</p>
              <i class="fas fa-long-arrow-alt-down"> 37</i>
                <i class="fas fa-long-arrow-alt-up">34</i>
                <p><BsDropletFill/>Humadity</p><h6></h6>

                 <i class="fas fa-wind">Wind</i>
                 <p><BsCompassFill/>Pressure</p>
                <i class="fas fa-tire-pressure-warning"></i>
              </div>
            </div>
        </div>
      </Card> */}
         <div>
           <h6>Sat</h6>
           <img
           alt="weather error"
           src={`https://developer.accuweather.com/sites/default/files/${weatherkey}-s.png`}/>
           <h6>{weatherType}</h6>
           <p>{min}° / {max}°</p>
         </div>
         
        
   
      </div>
    </div>
  )
}

export default WeatherCard