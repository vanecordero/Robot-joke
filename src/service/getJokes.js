
export default function GetJokes({lang, category}={}){
    const apiURL = `https://v2.jokeapi.dev/joke/${category}?lang=${lang}`

    return fetch(apiURL)
    .then(res => res.json())
    .then(response =>{  
        const {type} = response  
      if (type ==="twopart"){
          const {setup} = response
          const {delivery} = response
        return {setup, delivery, type}
            
      }else{     
          const {joke} = response
        return {joke, type}
      }
     
    })

}