import React from 'react';
import "./Card.css";

const Card = ({ pokemon, setMyPokemonData }) => {
  function addPokemon () {
    const data = {
      id: pokemon.id,
      name: pokemon.name,
      imageURL: pokemon.sprites.front_default,
    }
    setMyPokemonData((preArray) => {
      if (preArray.length > 4) {
        console.log("max");
        return preArray;
      } else {
        return [...preArray, data]
      }
    }) 
  };

  return (
    <div className='card' onClick={addPokemon}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} width="96" height="96" />
    </div>
  )
}

export default Card