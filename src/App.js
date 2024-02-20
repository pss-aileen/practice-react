import { useState } from 'react';
import './App.css';

export const getAllPokemonData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then((res) => res.json()).then((data) => resolve(data));
  });
};

export const getEachPokemonData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then((res) => res.json()).then((data) => resolve(data));
  });
}


function App() {
  const [pokemonData, setPokemonData] = useState([]);

  // const fetchData = async(url) => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   // console.log(data);
  // };

  // fetchData("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");

  const pokemonDataPerPage = async () => {
    let res = await getAllPokemonData("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
    console.log(res.results);
    return res.results;
  };

  pokemonDataPerPage();

  const pokemonDetailDataPerPage = async (res) => {
    const _pokemonDetailData = await pokemonDataPerPage();
    _pokemonDetailData.map((item) => {
      return getEachPokemonData(item.url);
    });
    setPokemonData(_pokemonDetailData);
  };

  console.log(pokemonData);

  return (
    <div className="App">
      <header>
        <h1>手持ちポケモンを決めよう</h1>
      </header>
      <main>
        ポケモン一覧
      </main>
      <div>
        手持ちポケモン
      </div>
    </div>
  );
}

export default App;
