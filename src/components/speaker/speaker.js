import sty from './speaker.module.css'
import { useState, useEffect,useContext } from 'react';
import SettingContext from 'context/settingsContext';
import UseImg from "components/robotImage/useImg";

const synth = window.speechSynthesis;

const getVoices=()=>{   
    let voices =[]
    voices = synth.getVoices().sort(function (a, b) {
        const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
        if ( aname < bname ) return -1;
        else if ( aname === bname ) return 0;
        else return +1;
    })
    return voices
}

const FindValue = (data_val)=>{
    switch (data_val){
        case 'en': 
            return 'Microsoft George - English (United Kingdom)'
        case 'es': 
            return 'Google español'
        case 'de': 
            return 'Google Deutsch'
        case 'fr': 
            return 'Google français'
        case 'pt': 
        return 'Google português do Brasil'
        default:
            console.log('Lenguaje no encontrado')
    }
}

function Speaker({joke, langVal}) {
    const [jokeText, setJokeText] = useState(joke)
    const [lang, setLang] = useState(FindValue(langVal))
    const {setImgUrl}= useContext(SettingContext)

    const VOICES = getVoices()

    //handle joke change
    useEffect(function(){
        setJokeText(joke)
    }, [joke])

    //handle lang change
    useEffect(function(){
        setLang(FindValue(langVal))
    }, [langVal])


    const handleClick =()=>{
        setImgUrl(UseImg('talk'))
        let utterThis = new SpeechSynthesisUtterance(jokeText)

        utterThis.onend = function (e) {
            console.log('SpeechSynthesisUtterance.onend');
            setImgUrl(UseImg('default'))
            window.speechSynthesis.cancel()
        }
        utterThis.onerror = function (e) {
            console.error('SpeechSynthesisUtterance.onerror');
        }           
        
        for(let i = 0; i < VOICES.length ; i++) {
            console.log('for bucle')
            if(VOICES[i].name === lang) {
                console.log('encontrado')
                utterThis.voice = VOICES[i];
                break
            }
        }

        if(utterThis.voice===null){
        alert('This browser only supports English speaker')
        }            
        synth.speak(utterThis)
    }

    return ( 
        <span className={sty.speak_button}>
          <button onClick={handleClick}>🕪</button>
        </span>
        
     );
}

export default Speaker;

/*

<option data-lang="en-GB" data-name="Microsoft George - English (United Kingdom)">Microsoft George - English (United Kingdom) (en-GB) -- DEFAULT</option>

<option data-lang="es-ES" data-name="Google español">Google español (es-ES)</option>

<option data-lang="de-DE" data-name="Google Deutsch">Google Deutsch (de-DE)</option>

<option data-lang="fr-FR" data-name="Google français">Google français (fr-FR)</option>

<option data-lang="pt-BR" data-name="Google português do Brasil">Google português do Brasil (pt-BR)</option>


*/ 