import portfolioData from '../data/portfolio';
import portfolioCardsCreate from './portfolio-cards-create';
console.log(portfolioData);

const portfolioListRef = document.querySelector('.portfolio-cards');
portfolioCardsCreate(portfolioData, portfolioListRef);
