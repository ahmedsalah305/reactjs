import React from 'react';
import { Badge, CardDeck, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import ResponsivePlanItem from './ResponsivePlanItem';
import Button from 'react-bootstrap/Button';

const ResponsivePlan = (props) => {
    let styles = {
        cardStyle:{width: '18rem' , backgroundColor:"black"},
        btnStyle:{height:"100px" , paddingTop:"30px"},
        containerStyle:{paddingBottom:"50px" , width:"1900px" , marginLeft:"0"},
    }
    let colors = {
        cardColor:"danger",
        badgeColor:"danger",
        btnColor:"danger",
    }
    let text = {
        getStarted:"Get Started",
    }
    let sizes = {
        btnSize:"lg",
    }
    return ( 
            <Container style={styles.containerStyle} id="plan">
                <CardDeck style={{width:"1800px"}}>
                    {props.responsivePlanPlans.map(plan =>{
                    return (
                        <Card key={plan.id} style={styles.cardStyle} border={colors.cardColor}>
                            <Card.Header>
                                <Badge variant={colors.badgeColor}>{plan.header}</Badge>
                                <Card.Title>{plan.title}</Card.Title>
                                <Card.Text>
                                {plan.describtion}
                                </Card.Text>
                            </Card.Header>
                            <hr/>
                            <ResponsivePlanItem responsivePlanItems={plan.type}/>
                            <center style={styles.btnStyle}>
                                <Button size={sizes.btnSize} variant={colors.btnColor}>{text.getStarted}</Button>
                            </center>
                        </Card>
                        )
                })}
                </CardDeck>
            </Container>
    );
}
export default ResponsivePlan;