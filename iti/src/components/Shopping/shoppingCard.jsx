import React, { Component } from 'react'
import Product from './product';

class ShoppingCard extends Component {

    render() { 
        const {onReset , products , onDelete , onIncrement} = this.props;
        return ( 
            <React.Fragment>
                <h1>Shopping Card</h1>
                <button onClick={onReset} className="brn btn-secondary btn-sm m-2">
                    Reset
                </button>
                {products.map(product => (
                    <Product key={product.id} onDelete={onDelete} onIncrement={onIncrement} product={product}/>
                ))}
            </React.Fragment> 
        );
    }
}
 
export default ShoppingCard;