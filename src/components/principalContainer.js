import Joke from './Joke';
import Settings from './settings';
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
          <RobotImg src={imgUrl} className="a" width="50"/>

          <Settings/>
          
          <Joke joke={jokes}/>

          <ButtonChange/>

          {
          (jokes !=='')
            ? 
            <Speaker
            joke={jokes}
            langVal={setting.lang}/> 
            :null
          }
        
        </section>
     );

     
}