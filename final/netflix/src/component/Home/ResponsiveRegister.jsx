import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const ResponsiveRegister = (props) => {
    let styles = {
        jumbotron: {textAlign:"center",color:"white",backgroundColor:"black",marginBottom:"0"},
        h2style: {textAlign:"center" , paddingBottom:"15px"},
        h3style: {textAlign:"center"},
        contentStyle: {color:"white"},
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
    const header = "Get an account today"
    const content = `Access free content on all of your devices, sync your list and 
continue watching anywhere.`
    const getStarted ="Get Started"
    return ( 
        <Jumbotron fluid style={styles.jumbotron}>
            <Container>
                <h2 style={styles.h2style}>{header}</h2>
                <h3 style={styles.h3style}>
                    <pre style={styles.contentStyle}>{content}</pre>
                </h3>
                <center>
                <Link to={linkReference.anchor}>
                    <Button style={styles.divBtnStyle} variant={colors.btnColor} size={sizes.btnSize}>
                       {getStarted}
                    </Button>
                </Link>
                </center>
            </Container>
        </Jumbotron>
     );
}
 
export default ResponsiveRegister;