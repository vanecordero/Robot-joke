import { useContext } from "react";
import  SettingContext  from "context/settingsContext";
import { SettingOptions } from "service/SettingOptions";
const SETTINGS_OPTIONS = SettingOptions

function Settings() {
  const {setting, setSetting} = useContext(SettingContext)
  
 //Update options
  const handleChanges = (e)=>{
    setSetting({...setting, [e.target.name]: e.target.value})
  }
  
  return ( 
  <form>
    {
    Object.keys(SETTINGS_OPTIONS).map(opt=>{            
      return <div key={"div_"+opt}>
          <label htmlFor={opt}>{opt}</label>
          <select name={opt} defaultValue={Object.keys(SETTINGS_OPTIONS[opt])[0]} onChange={handleChanges}> 
          {
            Object.values(SETTINGS_OPTIONS[opt]).map((val, i)=>{ 
              return <option key={"opt_"+val} value={Object.keys(SETTINGS_OPTIONS[opt])[i]}>{val}</option>
            })
          }
          </select>
      </div>
    })
    }
  </form>
   )

}

export default Settings;