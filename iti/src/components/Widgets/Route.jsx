import {useState, useEffect} from 'react';

const Route = ({path, children}) => {
    const [currentPath, SetCurrentPath] = useState(window.location.pathname)
    useEffect(()=>{
        const onLocationChange = () =>{
            SetCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate',onLocationChange)
        return () =>{
            window.removeEventListener('popstate',onLocationChange)
        }
    }, [])
    return currentPath === path ? children : null;
    // return ( 
    //     <React.Fragment></React.Fragment>
    //  );
}
 
export default Route;