import portfolioCardsMarkup from './portfolio-cards-markup';

const portfolioCardsCreate = (portfolio, portfolioContainer) => {
  const strMarkup = portfolioCardsMarkup(portfolio, portfolioContainer);
  // console.log(strMarkup);
  portfolioContainer.innerHTML = '';
  portfolioContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default portfolioCardsCreate;
