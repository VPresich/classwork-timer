import pokemonGet from './pokemon-get';
import pokemonCreate from './pokemon-create';

const cardContainerRef = document.querySelector('.card-container');

const searcFormRef = document.querySelector('.search-form');

searcFormRef.addEventListener('submit', onSearchSubmit);

async function onSearchSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const strQuery = form.search.value;
  try {
    const pokemonData = await pokemonGet(strQuery);
    pokemonCreate(pokemonData, cardContainerRef);
  } catch (error) {
    console.log(error);
  } finally {
    form.reset();
  }
}
