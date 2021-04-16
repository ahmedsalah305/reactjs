import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'

const ResponsiveWhy = (props) => {
    let styles = {
        jumbotron: {textAlign:"center",color:"white",backgroundColor:"black",marginBottom:"0"},
        cardStyle: {backgroundColor:"black"},
        spanstyle: {fontSize: "10em" , color: "#DD4545"},
        cardTitleStyle: {fontSize: "1.17em" , fontWeight:"bold"},
    }
    let classNames = {
        h1Class:"mb-5",
    }
    const text = {
        headerText:"Why go Premium?"
    }
    return ( 
        <Jumbotron fluid style={styles.jumbotron}>
            <Container>
                <h1 className={classNames.h1Class}>{text.headerText}</h1>
                <CardDeck>
                    {props.responsiveWhyCards.map(card =>{
                        return (
                            <Card style={styles.cardStyle} key={card.id}>
                                <span style={styles.spanstyle}>
                                    <i className={card.link}></i>
                                </span>
                                <Card.Body>
                                    <Card.Title style={styles.cardTitleStyle}>{card.title}</Card.Title>
                                    <Card.Text>
                                        {card.describtion}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </CardDeck>
            </Container>
        </Jumbotron>
     );
}
 
export default ResponsiveWhy;