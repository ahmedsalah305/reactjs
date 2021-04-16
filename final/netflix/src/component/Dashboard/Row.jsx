import React, { useState, useEffect } from 'react';
import axios from './axios';
import '../General/Assets/CSS/CategoryRow.css'


function Row(props) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function getData(){
            let request = await axios.get(props.fetchUrl);
            setMovies(request.data);
            return request;

        }
        getData()
    },[props.fetchUrl])
    return (
        <div>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((movie) => {
                    return(
                    <a href={`../video/${movie.name}`}><img className={`poster ${props.isHead && "posterHead"}`} src={`${movie.poster}`} alt={movie.name} key={movie.id}/></a>
                    )
                })}
            </div>

        </div>
    )
}

export default Row