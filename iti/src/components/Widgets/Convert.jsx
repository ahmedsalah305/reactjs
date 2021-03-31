import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
    const [translated, SetTranslated] = useState("")
    const [debouncedText, SetDebouncedText] = useState(text)
    useEffect(() => {
        const timerId = setTimeout(() => {
            SetDebouncedText(text)
        }, 500);
        return () =>{
            clearTimeout(timerId)
        }
    },[text])
    useEffect(()=>{
        const doTranslation = async () =>{
            const {data} = await axios.post("https://translation.googleapis.com/language/translate/v2",{},{
                params:{
                    q:debouncedText,
                    target:language.value,
                    key:"AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
                },
            });

            SetTranslated(data.data.translations[0].translatedText);
        }

        doTranslation();

    }, [language,debouncedText])
    return ( 
        <React.Fragment>
            <div>
                <h1 className="ui header">
                {translated}
                </h1>
            </div>
        </React.Fragment>
     );
}
 
export default Convert;