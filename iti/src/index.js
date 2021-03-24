import React from 'react'; 
import ReactDOM from 'react-dom'; 
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';


// Todo App start

// import App from './components/TodoApp/App';

// const myApp = <App/>
// const myLocation = document.querySelector('#root')
// ReactDOM.render(myApp, myLocation);

// Todo App end

/* ################################################################### */

// Comment App start

// import CommentApp from './components/CommentApp/CommentApp';

// const myApp = <CommentApp/>
// const myLocation = document.querySelector('#root')
// ReactDOM.render(myApp, myLocation);

// Comment App end

import CalculatorApp from './components/CalculatorApp/CalculatorApp';

const myApp = <CalculatorApp/>
const myLocation = document.querySelector('#root')
ReactDOM.render(myApp, myLocation);
