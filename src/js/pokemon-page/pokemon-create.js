import pokemonCardMarkup from './pokemon-card-markup';

const pokemonCreate = (pokemonData, pokemonContainer) => {
  const strMarkup = pokemonCardMarkup(pokemonData);
  pokemonContainer.innerHTML = strMarkup;
};

export default pokemonCreate;
