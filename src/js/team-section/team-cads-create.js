import teamCardsMarkup from './team-cards-markup';

const teamCardsCreate = (team, teamContainer) => {
  const strMarkup = teamCardsMarkup(team, teamContainer);
  teamContainer.innerHTML = '';
  teamContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default teamCardsCreate;
