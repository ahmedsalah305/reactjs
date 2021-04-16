import React from 'react';

const ResponsivePayment = (props) => {
    let styles = {
        divStyle:{backgroundColor:"black" , paddingBottom:"60px" , paddingTop:"5px"},
        imgStyle:{width:"40px",marginRight:"30px"},
    } 
    return ( 
            <div style={styles.divStyle}>
                <center>
                    {props.responsivePaymentPayments.map(payment =>{
                        return (
                            <img key={payment.id} style={styles.imgStyle} src={payment.link} alt=""/>
                            )
                    })}
                </center>
            </div>
     );
}
 
export default ResponsivePayment;