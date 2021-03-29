import React, { Component } from 'react'
import {Route , Switch , Redirect} from 'react-router-dom'

import NavBar from './navbar'
import ShoppingCard from './shoppingCard';
// import About from './about';
// import Contact from './contact';
import Home from './home';
import ProductDetails from './productDetails';
import NotFound from './notFound';
import Menu from './menu'
import Login from './login';

class App extends Component {
    state = { 
        products:[
            {id:1 , name:"Burger" , count:0 , price: 30 , isInCart: false},
            {id:2 , name:"Fries"  , count:0 , price: 20 , isInCart: false},
            {id:3 , name:"Cola"   , count:0 , price: 10 , isInCart: false},
        ]
     }

    incrementHandler = product =>
    {
        let products = [...this.state.products];
        const index = products.indexOf(product)
        products[index] = {...products[index]}
        products[index].count++
        // products = products.map(p => {
        //     if(p.id === input.id)
        //     {
        //         p.count++;
        //     }
        //     return (p);
        // });
        this.setState({products});
    }

     handelDelete = product =>{
        const products = this.state.products.filter((p)=> p.id !== product.id);
        this.setState({products});
     };

     handelReset = () =>
     {
         let products = [...this.state.products];
         products = products.map(p => {
             p.count = 0;
             return (p);
         });
         this.setState({products});
     }
     handelInCartChange = product => {
         const products = [...this.state.products];
         const index = products.indexOf(product);
         products[index] = {...products[index]};
         products[index].isInCart = !products[index].isInCart;
         this.setState({products});
     } 
    render() { 
        return ( 
            <React.Fragment>
                <NavBar productsCount={this.state.products.filter(p => p.isInCart).length}/>
                <main className="container">
                    <Switch>
                        <Route path="/products/:id/:name?" render={
                            props => <ProductDetails 
                            products={this.state.products}
                            {...props}
                            />}/>
                            <Route path='/login' component={Login}/>
                        <Route path="/cart" render={
                            props => <ShoppingCard 
                            products={this.state.products.filter(p => p.isInCart)} 
                            onIncrement={this.incrementHandler} 
                            onReset={this.handelReset} 
                            onDelete={this.handelInCartChange}
                            {...props}
                            />}/>
                        {/* <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/> */}
                        <Route path="/notfound" component={NotFound}/>
                        <Route 
                        path="/menu"
                        render={props => (
                            <Menu 
                            {...props}
                            products={this.state.products}
                            onClick={this.handelInCartChange}
                            />
                        )}
                        />
                        <Route path="/home" component={Home}/>
                        
                        <Redirect from='/' to='/home'/>
                        <Redirect to='/notfound'/>
                    </Switch>
                </main>
            </React.Fragment>
         );
    }
}
 
export default App;