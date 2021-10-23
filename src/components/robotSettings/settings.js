import { useContext } from "react";
import  SettingContext  from "context/settingsContext";
import { SettingOptions } from "service/SettingOptions";
const SETTINGS_OPTIONS = SettingOptions

function Settings({className}) {
  const {setting, setSetting} = useContext(SettingContext)
  
 //Update options
  const handleChanges = (e)=>{
    setSetting({...setting, [e.target.name]: e.target.value})
  }
  
  return ( 
  <form className={className}>
    {
    Object.keys(SETTINGS_OPTIONS).map(opt=>{            
      return <div key={"div_"+opt}>
        <div>
          <label htmlFor={opt}>{opt}</label>
        </div>
        <div>
          <select name={opt}
          defaultValue={Object.keys(SETTINGS_OPTIONS[opt])[0]} onChange={handleChanges}> 
          {
            Object.values(SETTINGS_OPTIONS[opt]).map((val, i)=>{ 
              return <option key={"opt_"+val} value={Object.keys(SETTINGS_OPTIONS[opt])[i]}>{val}</option>
            })
          }
          </select>          
        </div>
      </div>
    })
    }
  </form>
   )

}

export default Settings;