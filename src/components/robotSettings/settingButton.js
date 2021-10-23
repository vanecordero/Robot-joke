import { useState } from 'react';
import Settings from './settings';
import icon from 'img/settings.png'
import sty from './settings.module.css'

function SettingButton() {
    const [show, setShow]= useState(false)

    const handleClick=()=>{
        setShow(!show)
    }

    return (
        <div className={sty.setting_container}>
            <button type="button" onClick={handleClick}
            className={sty.setting_button}>
                <img src={icon} alt="Settings button"
                className={(show)?sty.rotate:null}/>
            </button>
            {
                (show)?<Settings className={(show)? sty.fadeInLeft:sty.fadeOutLeft}/>:null
            }
        </div>
      );
}

export default SettingButton;