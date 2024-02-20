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
