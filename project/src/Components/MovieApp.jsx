import React, { useEffect, useState } from 'react'
import axios from 'axios';

const MovieApp = () => {
const[search ,SetSearch]=useState([]);
console.log(search,"search")

 async function getMovie(){
  
  // const axios = require('axios');
  
  const options = {
    method: 'GET',
    url: 'https://movies-api14.p.rapidapi.com/search',
    params: {
      query: 'breaking bad'
    },
    headers: {
      'x-rapidapi-key': '24860f43d4msh8600aa971e0c2d2p1f96b2jsn1fb08fb1c638',
      'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
    }
  };
  
 
  try {
    const response = await axios.request(options);
    SetSearch(response.data.contents);
    console.log(response.data.contents)
  } catch (error) {
    console.error(error);
  }
}
useEffect(()=>{
    getMovie()},[])
    
  return (
    <div className='body'>
        <h1>Movie-App</h1>
        <div>
        <p>
            <input  type='text' placeholder='search' />
            <button >submit</button>

        </p>
        <div className='box'>
          {search.map((item)=>(
            <div className='b-1'>
              <img className='img' src={item.poster_path} />
              <p>{item.title}</p>
              <p>{item.release_date}</p>
              <p>{item.vote_average}</p>
            </div>
          
          ))}

        </div>
        </div>
    </div>
  )
}


export default MovieApp;