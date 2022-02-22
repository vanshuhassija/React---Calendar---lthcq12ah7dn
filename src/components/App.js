import React, {Component, useState} from "react";
import '../styles/App.css';
import Calendar from "./Calender";

const App = () => {
  const [month,setMonth]=useState(1);
  const [year,setYear]=useState(2022);
  return (
    <div id="main">
      <h1>Calendar</h1>
      <div style={{display: 'flex', flexDirection: 'row',justifyContent:"space-around"}}>
        <select value={month} onChange={(e)=>{
          setMonth(e.target.value);
        }}>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>  
          <option value="8">August</option>  
          <option value="9">September</option>  
          <option value="10">October</option>  
          <option value="11">November</option>  
          <option value="12">December</option>  


        </select>
        <input type="text" placeholder="Year" value={year} onChange={(e)=>{
          setYear(e.target.value);
        }}/>

        </div>
        <Calendar/>
    </div>
  )
}


export default App;
