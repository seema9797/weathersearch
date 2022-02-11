import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Card} from 'reactstrap';
import './card.css'
import { BsDropletFill,BsCompassFill } from "react-icons/bs";

const SearchCityWeather = ({onCityFound}) => {
    const keyapi='nA57cWPOUEKEiBtMjTXd8CBISxKrIrJC'
  const[searchinput,setSearchinput]=useState('')

  
   const getCity=(city)=>{
       console.log(city)
       const url=`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${keyapi}&q=${city}`
        fetch(url)
        .then(res=>res.json())
        .then(res=>res.find(l=>l.Country.ID === 'IN'))
       // .then(res=>console.log(res))
        .then(res=>onCityFound({
              name:res.LocalizedName,
              key:res.Key,
              state:res.AdministrativeArea.ID,
        }))
    }
  return (
      <div className="mb-3">
      <input 
       value={searchinput}
      onChange={(e)=>setSearchinput(e.target.value)} type="text" placeholder="city"/>
       <button className="btnsearch" onClick={()=>getCity(searchinput)}>Search</button>
      </div>
      
    
   
  )
}

export default SearchCityWeather