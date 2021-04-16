import React from 'react';
import { ListGroup , ListGroupItem } from 'react-bootstrap';

const ResponsivePlanItem = (props) => {
    let styles = {
        listStyle:{height:"550px"},
        itemStyle:{backgroundColor:"black"},
        h3Style:{lineHeight:"200%",fontSize:"16px"},
    }
    let classNames = {
        listGroupClass:"list-group-flush",
        checkClass:"fas fa-check",
    }
    return ( 
        <ListGroup style={styles.listStyle} className={classNames.listGroupClass}>
            {props.responsivePlanItems.map(item =>{
                return (
                    <ListGroupItem key={item.id} style={styles.itemStyle}>
                        {item.text.map(txt =>{
                            return (
                                <h5 key={txt.id} style={styles.h3Style}>
                                    <i className={classNames.checkClass}></i> {txt.feature}
                                </h5>                            
                            )
                        })}
                    </ListGroupItem>
                )
            })}
        </ListGroup>
     );
}
 
export default ResponsivePlanItem;