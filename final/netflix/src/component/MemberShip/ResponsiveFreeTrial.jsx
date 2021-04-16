import React, { useEffect,useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios';
import AllUrls from '../General/Assets/JSX/AllUrls';
import { Link } from 'react-router-dom';

const ResponsiveFreeTrial = () => {
    const [myRes , setMyRes] = useState({})
    let styles = {
        jumbotronStyle: {textAlign:"center",color:"white",backgroundColor:"black",marginBottom:"0"},
        link: {color:"white", fontSize:"12px"},
    }
    let classNames = {
        hClass:"mb-5",
        btnGroupClass:"mb-2",
        btnClass:"mr-1"
    }
    let text = {
        header1:"Get Premium free for 1 month",
        header3:"Only $9.99 after. Cancel anytime.",
        link:"Terms and conditions apply",
        getStarted:"Get Started",
        viewPlans:"View Plans",
    }
    let colors = {
        btnColor:"danger",
    }
    let sizes = {
        btnSize:"lg",
    }
    let linkReference = {
        anchor:"/"
    }
    var tryTrial = ()=>{
        var res = axios({
            method: 'post',
            url: AllUrls.login,
            data: {
                username: 'ahmed',
                password: 'netflix_1234'
            }
          }).then(function (response) {
            console.log(response);
            setMyRes(res)
        })
        console.log(myRes.token)
    }
    let go = ()=>{
        const plan = document.querySelector('#plan');
        plan.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    return ( 
        <Jumbotron fluid style={styles.jumbotronStyle}>
            <Container>
                <h1 className={classNames.hClass}>{text.header1}</h1>
                <h3 className={classNames.hClass}>{text.header3}</h3>
                <ButtonGroup className={classNames.btnGroupClass} size={sizes.btnSize}>
                    <Link to="/signup"><Button variant={colors.btnColor} className={classNames.btnClass}>{text.getStarted}</Button></Link>
                    <Link onClick={go}><Button onClick={tryTrial} variant={colors.btnColor}>{text.viewPlans}</Button></Link>
                </ButtonGroup>
                <p><a style={styles.link} href={linkReference.anchor}><i>{text.link}</i></a></p>
            </Container>
        </Jumbotron>
     );
}
 
export default ResponsiveFreeTrial;