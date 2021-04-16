import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

const ResponsivePlanHeader = () => {
    let styles = {
        jumbotron: {textAlign:"center",color:"white",backgroundColor:"black",marginBottom:"0" , paddingBottom:"0px"},
    }
    let classNames = {
        h1Class:"mb-5",
    }
    const text = {
        h1Text:"Pick your Premium",
        h3Text:"Watch without limits on your phone, labTop, and other devices.",
    }
    return ( 
        <Jumbotron fluid style={styles.jumbotron}>
            <Container>
                <h1 className={classNames.h1Class}>{text.h1Text}</h1>
                <h3>{text.h3Text}</h3>
            </Container>
        </Jumbotron>
     );
}
 
export default ResponsivePlanHeader;