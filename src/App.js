import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemonData, getEachPokemonData } from './utils/pokemon';
import Card from './components/Card';
import MyCard from './components/MyCard';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [myPokemonData, setMyPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");

  useEffect(() => {
    const pokemonDataPerPage = async () => {
      let res = await getAllPokemonData(initialURL);
      // console.log(res.results);
      setNextURL(res.next);
      setPrevURL(res.prev);
      loadPokemon(res.results);
    };
    pokemonDataPerPage();
  }, [])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getEachPokemonData(pokemon.url);
        return pokemonRecord;
      })
    )
    setPokemonData(_pokemonData);
    setIsLoading(false)
  }

  const handleClickPrev = async() => {
    if (!prevURL) return;
    setIsLoading(true);
    let data = await getAllPokemonData(prevURL);
    console.log(data);
    await loadPokemon(data.results);
    setPrevURL(data.previous);
    setNextURL(data.next);
    setIsLoading(false);
  };

  const handleClickNext = async() => {
    setIsLoading(true);
    let data = await getAllPokemonData(nextURL);
    console.log(data);
    await loadPokemon(data.results);
    setPrevURL(data.previous);
    setNextURL(data.next);
    setIsLoading(false);
  }
  

  return (
    <div className="App">
      <div className='wrapper'>
        <main className='main'>
          <div className='pokemon-cards'>
            {isLoading ? (
              <>
                now loading ...
              </>
            ): (
                <>
                {pokemonData.map((pokemon, i) => {
                  return <Card pokemon={pokemon} key={i} setMyPokemonData={setMyPokemonData} id={i} />;
                })}
              </>  
            )}
          </div>
          {isLoading ? (
            <></>
          ): (
              <div className='btns'>
                {prevURL? (<button onClick={handleClickPrev}>PREV</button>) : ""}
                <button onClick={handleClickNext}>NEXT</button>
              </div>
          )}
        </main>
        <div className='my-pokemon'>
          <h1 className='site-title'>CHOOSE POKEMON!</h1>
            {myPokemonData.map((pokemon, i) => {
              return <MyCard pokemon={pokemon} key={i} setMyPokemonData={setMyPokemonData} id={i} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
