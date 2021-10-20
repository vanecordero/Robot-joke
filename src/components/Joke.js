function Joke({type, setup, delivery, joke}) {
    return ( 
        <>
           {
                (type ==='twopart')? 
                <p>{setup}<br/>{delivery}</p>
                :<p>{joke}</p>
            }
        </>
     );
}

export default Joke;