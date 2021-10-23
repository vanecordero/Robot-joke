
export default function GetJokes({lang, category}={}){
    const apiURL = `https://v2.jokeapi.dev/joke/${category}?lang=${lang}&blacklistFlags=religious,racist,sexist,explicit`

    return fetch(apiURL)
    .then(res => res.json())
    .then(response =>{  
        const {type} = response  
        const {error} = response  
      if(!error){
        if (type ==="twopart"){
          const {setup} = response
          const {delivery} = response
        return {setup, delivery, type, error}            
      }else{     
          const {joke} = response
        return {joke, type, error}
      }
      }else{
        const {message} = response
        return {error, message}
      }
     
    })

}