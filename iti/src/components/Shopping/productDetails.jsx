import React, { Component } from 'react';
import qs from 'query-string'

class ProductDetails extends Component {
    // state = {  }

    handleSave = () =>
    {
        console.log("saved");
        this.props.history.replace('/cart');
    }

    render() { 
        const res = qs.parse(this.props.location.search);
        const product = this.props.products.filter( c => c.id === parseInt(this.props.match.params.id))[0];
        console.log(res);
        return ( 
            <React.Fragment>
                <h1>Details No.{this.props.match.params.id}</h1>
                <h2>{product.name}</h2> 
                <h2>count in shopping card: {product.count}</h2>
                <button onClick={this.handleSave} className="btn btn-primary btn-sm">Save</button>
            </React.Fragment> 
        );
    }
}
 
export default ProductDetails;

// const ProductDetails = props => {
//     const res = qs.parse(props.location.search);
//     const product = props.products.filter( c => c.id === parseInt(props.match.params.id))[0];
//     console.log(res);
//     return ( 
//         <React.Fragment>
//             <h1>Details No.{props.match.params.id}</h1>
//             <h2>{product.name}</h2> 
//             <h2>count in shopping card: {product.count}</h2>
//             <button className="btn btn-primary btn-sm">Save</button>
//         </React.Fragment> 
//     );
// }
 
// export default ProductDetails;