import { useContext } from 'react';
import  SettingContext  from 'context/settingsContext';

function ButtonChange() {
    const {setting, setSetting} = useContext(SettingContext)
    
    const handleClick=()=>{
        setSetting({...setting})
    }
    
    return ( 
        <button type="button" onClick={handleClick}>Tell me a joke</button>
     )
}

export default ButtonChange;