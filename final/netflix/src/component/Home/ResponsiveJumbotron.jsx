import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'

const ResponsiveJumbotron = () => {
    let styles = {
        jumbotronStyle: {textAlign:"center",color:"white",backgroundColor:"black",marginBottom:"0"},
        textStyle: {color:"white" , lineHeight:"150%"}
    }
    const text = `Enjoy critically-acclaimed movies,
inspiring documentaries, award-winning
foreign films and more`
    return ( 
        <Jumbotron fluid style={styles.jumbotronStyle}>
            <Container>
                <h2>
                    <pre style={styles.textStyle}>{text}</pre>
                </h2>
            </Container>
        </Jumbotron>
     );
}
 
export default ResponsiveJumbotron;