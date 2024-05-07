import React, { useEffect, useState } from 'react'
import './Row.css'
import instance from '../instance';

function Row(props) {
    // console.log(props);
    console.log(props.isPoster);
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original";

    const fetchData = async()=>{
      const response = await instance.get(props.fetchUrl)
      // console.log(response.data.results);
      setMovies(response.data.results)
    }
    console.log(movies);

    useEffect(()=>{
      fetchData()
    },[])

  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className="movie-row">
            { movies.map(item=>(<img className={`movie ${props.isPoster?'movie-poster':'movie'}`} src={`${base_url}${props.isPoster?item.poster_path:item.backdrop_path}`} alt="poster" />))
              }
        </div>
    </div>
  )
}

export default Row