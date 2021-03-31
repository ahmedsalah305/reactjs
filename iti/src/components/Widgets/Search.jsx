import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState("")
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResualts] = useState([])
    /*
    # []    => Run at initial render
    #       => Run at initial render and run at every render
    # [data]=> Run at initial render and run at every render if data has changed since last render
    */
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000);
        return () =>{
            clearTimeout(timerId)
        }
    },[term])

    useEffect(() => {
        const search = async () =>{
            const {data} = await axios.get("http://en.wikipedia.org/w/api.php",{
                params:{
                    action:"query",
                    list:"search",
                    origin:"*",
                    format:"json",
                    srsearch:debouncedTerm,
                },
            })
            setResualts(data.query.search)
        };
        if(debouncedTerm){search()}
    },[debouncedTerm])

    const onInputChange = (event) =>{
        setTerm(event.target.value)
    }
    const renderedResults = results.map((result) =>{
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                    {result.snippet}
                </div>
            </div>
        )
    })    
    return ( 
        <React.Fragment>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="input">Enter Search Tearm</label>
                    <input 
                    type="text" 
                    id="input" 
                    className="input" 
                    value={term} 
                    onChange={onInputChange}/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </React.Fragment>
     );
}
 
export default Search;