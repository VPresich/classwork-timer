import fetchData from '../common/fetch-data-async';
import { BASE_POKEMON_URL } from './pokemon-constants';

const pokemonGet = async searchQuery => {
  const url = `${BASE_POKEMON_URL}pokemon/${searchQuery}`;
  return fetchData(url);
};

export default pokemonGet;
