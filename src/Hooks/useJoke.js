import { useState , useEffect, useContext} from 'react';
import SettingContext from 'context/settingsContext';
import GetJokes from '../service/getJokes'
import UseImg from "components/robotImage/useImg";

export default function useJoke(){

    const {setting} = useContext(SettingContext)    
    const {setImgUrl}= useContext(SettingContext)
    const [joke, setJoke] = useState('')
  
    useEffect(function (){
      setImgUrl(UseImg('search'))
      GetJokes(
            {lang: setting['lang'], category: setting['category']}
            ).then(res => {
                setJoke(res)
                if(res.error){
                  setImgUrl(UseImg('error'))
                }else{
                  setImgUrl(UseImg('default'))
                }
                
            })
    },[setting,setImgUrl])   

      if(!joke.error){
        if(joke !== undefined && joke.type ==='twopart'){
          return ({ jokes:`${joke.setup}. ${joke.delivery}`})
         }else if(joke !== undefined && joke.type ==='single'){
            return ({ jokes: joke.joke})
         } else{
           return { jokes:''}
         }
      } else{
        return {jokes: joke.message}
      }


}