import React, { useEffect, useState } from 'react'
import './Cover.css'
import instance from '../instance'

function Cover(props) {
  console.log(props.fetchUrl);
  // to store data
  const [movie,setMovie] = useState({})
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData = async()=>{
    const response = await instance.get(props.fetchUrl)
    // console.log(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);
    setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);
  }

  console.log(movie);

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className='cover' style={{height:'600px', backgroundImage: `url(${base_url}${movie.backdrop_path})`, backgroundSize:'cover', backgroundAttachment:'fixed'}}>

      <div className="banner-details">
        <h1>{movie.name}</h1>
        <button className='btn btn-danger'>▶ Play</button>
        <button className='btn btn-outline-light ms-3'>ⓘ More Info</button>
        <h3 style={{fontSize:'1.2vw', lineHeight:'150%', color:'white', fontWeight:'300'}}>{movie.overview}</h3>
      </div>
      
    </div>
  )
}

export default Cover