import { useState } from 'react';
import './Pokemon.css'
import { useFetch } from 'use-http';

export default function Pokemon() {
    const baseUrl = 'https://pokeapi.co/api/v2'
    const [pokemon, setPokemon] = useState('pikachu');
    const { loading, error, data = []} = useFetch(`${baseUrl}/pokemon-species/${pokemon}`, {}, [pokemon])
    console.log(data)

    return(
        <div className="Pokemon">
        </div>
    );
}