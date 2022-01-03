import React,{Component} from 'react'
import BarChart from 'react-bar-chart';
import { Bar } from "react-chartjs-2";
import { useNavigate } from 'react-router-dom';
import {CategoryScale} from 'chart.js'
import Chart from 'chart.js/auto'

  export const data =[
    {day:1,cases:400,deaths:20},
    {day:2,cases:1000,deaths:10},
    {day:3,cases:400,deaths:30},
    {day:4,cases:400,deaths:50},
    {day:5,cases:400,deaths:40},
    {day:6,cases:400,deaths:20},
    {day:7,cases:400,deaths:15},
    {day:8,cases:400,deaths:25},
    {day:9,cases:400,deaths:5},
    {day:10,cases:400,deaths:50},
]
  const margin = {top: 50, right: 10, bottom: 30, left: 100};
  

export  const About=({user})=>  {
    const navigate = useNavigate()

    const onLogout=()=>{
        navigate('/')
    }
    const state = {
      labels: data.map((value)=>['Day',value.day]),
      
      datasets: [
        {
          label: 'Deaths',
          label2:'Cases',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: data.map((value)=>[value.deaths])
          

        }
      ]
    }

return(
    <>
   <button style={{position:'absolute', top:0, right:0}} onClick={onLogout}>
    Logout
   </button>
   <h1>
     {user}
   </h1>
   <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'left'
            }
          }}
          />
   <footer>
     TCS Copyright 2022
   </footer>

  

   </>
)

}

export default About