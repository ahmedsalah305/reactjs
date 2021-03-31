import React, {useState} from 'react';
import DropDown from './DropDown';
import Convert from './Convert';

const options = [
    {label:"Arabic" , value:"ar"},
    {label:"English" , value:"en"},
    {label:"French" , value:"fr"},
    {label:"German" , value:"de"},
    {label:"Italian" , value:"it"},
    {label:"Russian" , value:"ru"},
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [textLanguage, setTextLanguage] = useState("")
    const onInputChange = (event) =>{
        setTextLanguage(event.target.value)
    }
    return ( 
    <React.Fragment>
        <div className="ui form mt-2">
            <div className="field">
                <label htmlFor="input">Enter Text</label>
                <input id="input" type="text" value={textLanguage} onChange={(event)=>onInputChange(event)}/>
            </div>
        </div>
        <DropDown options={options} selected={language} onSelectedChange={setLanguage} label="Select A Language"/>
        <hr/>
        <h3 className="ui header">Output</h3>
        <Convert language={language} text={textLanguage}/>
    </React.Fragment> 
    );
}
 
export default Translate;
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM