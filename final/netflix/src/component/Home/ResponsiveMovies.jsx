import React, { useEffect,useState } from 'react';  
import '../General/Assets/CSS/slickmincss.css'
import '../General/Assets/CSS/slickthememincss.css'
import Slider from "react-slick";
import axios from './axios';

const ResponsiveMovies = (props) => {
  const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function getData(){
            let request = await axios.get(props.fetchUrl);
            setMovies(request.data);
            return request;
        }
        getData()   
    },[props.fetchUrl])

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      let styles = {
        divStyle: {marginTop:"0"},
        imageStyle:{padding:"0"}
      }
      return (
        <div style={styles.divStyle}>
          <Slider {...settings}>
              {movies.map((image) =>{
                  return (
                      <div key={image.name}>
                        <img src={image.poster} alt={image.story} style={styles.imageStyle}/>
                      </div>
                  )
                })}
          </Slider>
        </div>
      );
    }
    
    
    export default ResponsiveMovies;
    
    // {!props.loginLogout ? 
    // <a href="/login">
    //   <img src={image.poster} alt={image.story} style={styles.imageStyle}/>
    // </a>
    // :
    // <a href={`../video/${image.name}`}>
    //   <img src={image.poster} alt={image.story} style={styles.imageStyle}/>
    // </a>
    // }