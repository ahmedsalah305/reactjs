import React, { useState, useEffect } from 'react';
import axios from './axios';
import '../General/Assets/CSS/CategoryRow.css';
import requests from './requests';
import '../General/Assets/CSS/Banner.css';


function Banner(props) {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function getData(){
            let request = await axios.get(requests.actionMovies);
            setMovie(request.data[Math.floor(Math.random() * request.data.length - 1)]);
            //console.log(request.data[Math.floor(Math.random() * request.data.length - 1)])
            return movie;

        }
        getData()
    },[])
    /*const addLater = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token", "aadc1cbeb7b7e6ea6728a32ef3af523423fde085");
        var requestOptions = {
        method: 'post',
        headers: myHeaders,
        body: JSON.stringify({Show_id: movie.id})
        }
        fetch("https://itipythonapi.herokuapp.com/api/addlater/", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
    } */
        console.log(movie)
        const truncate = (string, len) => {
            return string?.length > len ? string.substr(0,len -1 ) + "..." : string;
        }
        return(
            <div className="banner" style={{
                backgroundImage: `url("${movie.poster}")`,
                backgroundPosition: "center center",
                backgroundSize:'100% 100%',
                backgroundRepeat:"no-repeat"
            }}>
                <div className="banner-content">
                    <h2>{movie.name}</h2>
                    <div className="banner-button">
                        <a href= {`../video?${movie.name}`} ><button>Play</button></a>
                        <button>Add My List</button>
                        <button>My Play List</button>
                    </div>
                    <p>{truncate(movie.story, 150)}</p>
                </div>
                <div className="banner-footer"></div>
            </div>
        )
    }
    
export default Banner