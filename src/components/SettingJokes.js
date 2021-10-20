import { useState , useEffect} from 'react/cjs/react.development';
import GetJokes from '../service/getJokes'
import Joke from './Joke';
//import { useContext } from "react";
//import Settings from './settings';


export default function SettingJokes(){
    const lang = 'en'
    const category='Programming'
    const [joke, setJoke] = useState([]
      )
    useEffect(function (){
        GetJokes({lang, category}).then(res => setJoke(res))
      },[])
      
    return ( 
        <section>
           <Joke type={joke.type}
           setup={joke.setup}
           delivery={joke.delivery}
           joke={joke.joke}/>
        </section>
     );

     
}