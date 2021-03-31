import React, {useState, useEffect, useRef} from 'react';

const DropDown = ({options, selected, onSelectedChange, label}) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()
    const onDivClick = (option) =>{
        onSelectedChange(option)
    }
    const onDivSelectionClick = () =>{
        setOpen(!open)
    }
    useEffect(() => {
        const onBodyClick = (event) => {
         if (ref.current && ref.current.contains(event.target)) {
            return;
          }
     
          setOpen(false);
        };
     
        document.body.addEventListener('click', onBodyClick);
     
        return () => {
          document.body.removeEventListener('click', onBodyClick);
        };
      }, []);
    const renderedOptions = options.map((option,index) =>{
        if(option.value === selected.value){return null}
        return (
            <div key={index} className="item" onClick={() => onDivClick(option)}>
                {option.label}
            </div>
        )
    })
    return ( 
        <React.Fragment>
            <div ref={ref} className="ui form">
                <div className="field">
                    <label htmlFor="input" className="label">{label}</label>
                    <div 
                    onClick={() => onDivSelectionClick()} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                        <i className="drobdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default DropDown;