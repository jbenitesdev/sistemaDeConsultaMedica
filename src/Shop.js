import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, [])

    const [pokemons, setPokemons] = useState([]);

    const fetchItems = async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
        const pokemons = await data.json()
        setPokemons(pokemons.results)
    }

    return (
        <div>
            {pokemons.map((pokemon, i) => {
                const id = pokemon.url.split('pokemon/')
                return (<h1 key={i}><Link to={`/shop/${id[1].replace('/', '')}`}>{pokemon.name}</Link></h1>)
            })}
        </div>
    );
}

export default Shop;
