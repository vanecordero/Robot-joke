import { useState } from 'react';
import Settings from './settings';
import icon from 'img/settings.svg'
import sty from './settings.module.css'

function SettingButton() {
    const [show, setShow]= useState(false)

    const handleClick=()=>{
        setShow(!show)
    }

    return (
        <>
        <button type="button" onClick={handleClick}
        className={sty.setting_button}>
            <img src={icon} alt="Settings button"
            className={sty.setting_img}/>
        </button>
        {
            (show)?<Settings/>:null
        }
        </>
      );
}

export default SettingButton;