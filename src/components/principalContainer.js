import Joke from './Joke';
//import Settings from './robotSettings/settings';
import SettingButton from './robotSettings/settingButton';
import ButtonChange from './buttonChange';
import RobotImg from './robotImage/robotImg';
import useJoke from 'Hooks/useJoke';
import sty from './styles.module.css';
import Speaker from './speaker/speaker';
import SettingContext from 'context/settingsContext'
import { useContext } from 'react';

export default function PrincipalContainer(){
    const {jokes} = useJoke()
    const {setting} = useContext(SettingContext)
    const {imgUrl} = useContext(SettingContext)
    
   // keycode: 74

    return ( 
        <section tabIndex="0" className={sty.joke_container}>
          <SettingButton/>
          <RobotImg src={imgUrl} className={sty.robot_img}/>
          
          <Joke joke={jokes} className={sty.joke_text}/>

        <div className={sty.joke_buttons}>
          <ButtonChange className={sty.joke_button_joke}/>
        {
          (jokes !=='')
            ? 
            <Speaker
            joke={jokes}
            langVal={setting.lang}/> 
            :null
          }
        </div>     
      </section>
     );

     
}