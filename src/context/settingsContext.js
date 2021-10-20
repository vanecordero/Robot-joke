import React,{ useState } from "react";

const Context = React.createContext({})

 export function SettingContext ({children}){

   const [setting, setSetting] = useState({
    "lang":"en",
    "category":"Any",
})
    return (
        <Context.Provider value={{setting, setSetting}}>
            {children}
        </Context.Provider>
    )

}

export default Context