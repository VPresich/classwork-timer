function pokemonCardMarkup({ name, sprites, weight, height, abilities }) {
  const abilitiesItems = abilities
    .map(({ ability }) => ` <li class ="list-group-item">${ability.name}</li>`)
    .join('');

  return `
     <div class="card">
        <div class="card-img-top">
          <img src="${sprites.front_default}" alt="${name}" />
        </div>
        <div class="card-body">
          <h2 class="card-title">Name: ${name}</h2>
          <p class="card-text">Weight: ${weight}</p>
          <p class="card-text">Height: ${height}</p>
          <p class="card-text"><b>Artist:</b></p>
          <ul class="list-group">
            ${abilitiesItems}
          </ul>
        </div>
      </div>
      `;
}

export default pokemonCardMarkup;
