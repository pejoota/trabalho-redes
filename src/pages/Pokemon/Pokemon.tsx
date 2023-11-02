import { useState } from 'react';
import { useFetch } from 'use-http';
import './Pokemon.css'

export default function Pokemon() {
    const baseUrl = 'https://pokeapi.co/api/v2'
    const [pokemon, setPokemon] = useState('bulbasaur');
    const { loading, error, data = []} = useFetch(`${baseUrl}/pokemon/${pokemon}`, {}, [pokemon])

    if(!error && !loading){ 

        return(
            <div className="Pokemon">
                <div className='sprite'>
                    <img className='image' src={`${data.sprites.front_default}`} alt="" />
                </div>
                <div>
                <div className='info'>
                    Name: {pokemon}
                </div>
                <div className='info'>
                    Type: {data.types.length === 1 ? data.types[0].type.name : `${data.types[0].type.name}/${data.types[1].type.name}`}
                </div>  
                </div>

            </div>
        );}
    else
        return(
            <></>
        )
}