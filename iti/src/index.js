import React from 'react'; 
import ReactDOM from 'react-dom'; 
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import Header from './components/header';
import TodoList from './components/todo';

const myApp = <React.Fragment>
    <Header/>
    <TodoList/>
</React.Fragment>

const myLocation = document.querySelector('#root')
ReactDOM.render(myApp, myLocation); 