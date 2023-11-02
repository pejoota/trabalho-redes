import { useState } from 'react';
import { useFetch } from 'use-http';
import './Pokemon.css'

export default function Pokemon() {
    const baseUrl = 'https://pokeapi.co/api/v2'
    const [pokemon, setPokemon] = useState('bulbasaur');
    const [input, setInput] = useState('bulbasaur');

    const { loading: loading, error: error, data: data = []} = useFetch(`${baseUrl}/pokemon/${pokemon}`, {}, [pokemon])
    const { loading: loading2, error: error2, data: data2 = []} = useFetch(`${baseUrl}/pokemon-species/${pokemon}`, {}, [pokemon])

    if(!error && !loading && !error2 && !loading2){ 

        return(
            <div className="Pokemon">
                <div className='sprite'>
                    <img className='image' src={`${data.sprites.front_default}`} alt="" />
                </div>
                <div className='info-box'>
                    <div className='info'>
                        Name: {pokemon}
                    </div>
                    <div className='info'>
                        Type: {data.types.length === 1 ? data.types[0].type.name : `${data.types[0].type.name}/${data.types[1].type.name}`}
                    </div>
                    <div className='info'>
                        Ability: {data.abilities.length === 1 ? data.abilities[0].ability.name : `${data.abilities[0].ability.name}/${data.abilities[1].ability.name}`}
                    </div>
                    <div className='info'>
                        {data2.flavor_text_entries.find((entry: any) => {
                            return entry.language.name === 'en';
                        }).flavor_text}
                    </div>
                </div>
                <div>
                <form>
                    <input type="text" onChange={e => setInput(e.target.value)}/>
                    <button onClick={() => setPokemon(input)}>Search</button>
                </form>
                </div>
            </div>
        );}
    else
        return(
            <></>
        )
}