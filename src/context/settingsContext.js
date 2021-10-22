import React,{ useState } from "react";
import robot_df from 'img/robot.svg'

const Context = React.createContext({})

 export function SettingContext ({children}){

   const [setting, setSetting] = useState({
    "lang":"en",
    "category":"Any"
    })

   const [imgUrl, setImgUrl] = useState(robot_df)
   
    return (
        <Context.Provider value={{setting, setSetting,imgUrl, setImgUrl}}>
            {children}
        </Context.Provider>
    )

}

export default Context