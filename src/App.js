import { useEffect, useState } from "react";
import { getAllPokemon, getSinglePokemon } from "./utils/pokemon";

function App() {
  const [pokemonData, setpokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialURL = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL);
      loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  }, [])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getSinglePokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setpokemonData(_pokemonData);
  }

  console.log(pokemonData);

  return (
    <div className="App">
      {loading ?
        <>
          <h1>loading...</h1>
        </>
        :
        <>
          <h1>fetched pokemon data</h1>
          {pokemonData.map((data) => {
            return (
              <>
                <img src={data.sprites.front_default} width="160"/>
                <img src={data.sprites.back_default} width="160"/>
                <br />
              </>
            )
          })}
        </>
      }
    </div>
  );
}

export default App;