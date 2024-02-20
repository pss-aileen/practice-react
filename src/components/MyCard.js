import React from 'react';
import "./MyCard.css"

const MyCard = ({ pokemon, setMyPokemonData }) => {
  
  function deletePokemon() {
    setMyPokemonData((preArray) => {
      return preArray.filter((item) => {
        return item.id !== pokemon.id;
      })
    });
  }

  return (
    <div className='myCard' onClick={deletePokemon}>
      <img src={pokemon.imageURL} alt={pokemon.name} width="96" height="96" />
    </div>
  )
}

export default MyCard