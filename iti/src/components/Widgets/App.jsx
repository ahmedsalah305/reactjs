import React from 'react';
import {useState} from 'react';
import Accordion from './Accordion';
import Search from './Search';
import DropDown from './DropDown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
    {title:"question number 1" , content:"answer number 1"},
    {title:"question number 2" , content:"answer number 2"},
    {title:"question number 3" , content:"answer number 3"},
]

const options = [
    {label:"label number 1" , value:"value number 1"},
    {label:"label number 2" , value:"value number 2"},
    {label:"label number 3" , value:"value number 3"},
]
// const showAccordion = () =>{if(window.location.pathname === '/')         return(<Accordion items={items}/>)}
// const showSearch    = () =>{if(window.location.pathname === '/search')   return(<Search/>)}
// const showDropDown  = () =>{if(window.location.pathname === '/dropdown') return(<DropDown options={options} selected={language} onSelectedChange={setLanguage} label="Select A Language"/>)}
// const showTranslate = () =>{if(window.location.pathname === '/translate')return(<Translate/>)}

// const ShowComponenet = (route,component) =>{return window.location.pathname === route ? component : null}

const App = () => {
    const [selected, setSelected] = useState(options[0])
    // const [showDropDown, setShowDropDown] = useState(true)

    // const onButtonClick = () =>{
    //     setShowDropDown(!showDropDown)
    // }
    return (
        <React.Fragment>
            {/* <button onClick={() => onButtonClick()}>Toggle Dropdown</button> */}
            {/* <Search/> */}
            {/* {showDropDown && <DropDown options={options} selected={selected} onSelectedChange={setSelected}/>}    */}
            {/* <Accordion items={items}/> */}
            {/* {showAccordion()}
            {showSearch()}
            {showDropDown()}
            {showTranslate()} */}
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/search">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <DropDown options={options} selected={selected} onSelectedChange={setSelected} label="Select A Language"/>
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
            {/* <Translate/> */}
        </React.Fragment>
    );
}
 
export default App;

// export default () =>{
//     return (
//         <React.Fragment>
//             <Search/>   
//             {/* <Accordion items={items}/> */}
//         </React.Fragment>
//     )
// }