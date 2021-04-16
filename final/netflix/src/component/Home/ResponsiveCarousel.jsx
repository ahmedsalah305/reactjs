import React, { useEffect,useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import axios from './axios';


const ResponsiveCarousel = (props) => {
    let styles = {
        logoStyle:{position:"absolute",bottom:"1000px",left:"-200px"},
        logoDivText1Style:{position:"absolute",bottom:"800px",left:"-200px"},
        logoh1Text1Style:{textAlign:"left"},
        logoDivText2Style:{position:"absolute",bottom:"600px",left:"-200px"},
        logoh1Text2Style:{textAlign:"left", lineHeight:"200%"},
        logoDivBtnStyle:{position:"absolute",bottom:"500px",left:"-200px"},
        btnStyle:{border:"3px solid white",color:"white",font:"16px"},
        text1Color:{color:"white"},
        text2Color:{color:"white"},
        imageStyle:{height:"800px"}
    }
    let classNames = {
        carouselClass:"mb-5",
        imgClass:"d-block w-100",
        logoClass:"main-text",
        logoDivClass:"col-md-12 text-center",
    }
    let colors = {
        btnColor:"danger",
    }
    let sizes = {
        btnSize:"lg",
    }
    let linkReference = {
        anchor:"premium",
    }
    const logo = "Netflix"
    const text1 = `Enjoy Thoughtful 
Entertainment`
    const text2 = `Stream thousands of films for free, thanks to 
the generous support of your public 
library or university`
    const getStarted = "Get Started"
    
    
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
        <Carousel className={classNames.carouselClass} fade interval={1500} controls={false}>
            {movies.map((image) =>{
                return (
                    <Carousel.Item key={image.name}>
                        <img
                        style={styles.imageStyle}
                        className={classNames.imgClass}
                        src={image.poster}
                        alt={image.story}
                        />
                        <Carousel.Caption>
                            <div style={styles.logoStyle} className={classNames.logoClass}>
                                <div className={classNames.logoDivClass}>
                                    <h1>{logo}</h1>
                                    {/* <h1>{myRes.data}</h1> */}
                                </div>
                            </div>
                            <div style={styles.logoDivText1Style} className={classNames.logoClass}>
                                <div className={classNames.logoDivClass}>
                                    <h1 style={styles.logoh1Text1Style}>
                                        <pre style={styles.text2Color}>{text1}</pre>
                                    </h1>
                                </div>
                            </div>
                            <div style={styles.logoDivText2Style} className={classNames.logoClass}>
                                <div className={classNames.logoDivClass}>
                                    <h3 style={styles.logoh1Text2Style}>
                                        <pre style={styles.text2Color}>{text2}</pre>
                                    </h3>
                                </div>
                            </div>
                            <div style={styles.logoDivBtnStyle} className={classNames.logoClass}>
                                <div className={classNames.logoDivClass}>
                                <Link to={linkReference.anchor}>
                                    <Button style={styles.btnStyle} variant={colors.btnColor} size={sizes.btnSize}>
                                       {getStarted}
                                    </Button>
                                </Link>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
};

export default ResponsiveCarousel;