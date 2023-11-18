import RestaurantCard from "./RestaurantCard"
import arr from '../utils/mockData';
import React, { useEffect } from "react";
import {useState} from "react";
export default Body=()=>{
{
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=()=>{
        const data =fetch()
    }
   const [res,setRes] =  useState(arr)
    return(
      <div className="body">
        <div className="filter">
          <button className="filter-b" onClick={()=>{
           let newarr =arr.filter(res=>res.star>4.2)
           setRes(newarr)
          }} >Top rated restaurants</button>
        </div>
      <div className="res-container">
        {res.map(item=>{
          return (
            <RestaurantCard key={item.resname} arr={item}/>
          )
        })}
      
        
  
      </div>
      </div>
    )
  }