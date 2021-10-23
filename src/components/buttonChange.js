import { useContext } from 'react';
import  SettingContext  from 'context/settingsContext';

function ButtonChange({className}) {
    const {setting, setSetting} = useContext(SettingContext)
    
    const handleClick=()=>{
        setSetting({...setting})
    }
    
    return ( 
        <button type="button" onClick={handleClick} className={className}>find another joke</button>
     )
}

export default ButtonChange;