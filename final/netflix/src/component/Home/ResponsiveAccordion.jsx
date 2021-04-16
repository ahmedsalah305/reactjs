import React from 'react';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

const ResponsiveAccordion = (props) => {
    let styles = {
        cardStyle:{backgroundColor:"black" , borderBottom:"1px solid grey" , fontSize:"20px" , color:"white" , cursor:"pointer"},
        h2Style:{textAlign:"center" , color:"white"},
    }
    let classNames = {
        accordion:"mt-4 container",
    }
    const header = "Frequently asked questions"
    return ( 
        <Accordion className={classNames.accordion}>
            <h2 style={styles.h2Style}>{header}</h2>
            {props.responsiveAccordionAsk.map(question =>{
                return (
                    <Card key={question.id} style={styles.cardStyle}>
                        <Accordion.Toggle as={Card.Header} eventKey={question.id}>
                        {question.question}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={question.id}>
                        <Card.Body>{question.answer}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            })}
        </Accordion>
     );
}
 
export default ResponsiveAccordion;