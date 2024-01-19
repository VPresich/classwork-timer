import { PORTFOLIO_PHOTO_PATH } from '../common/constants';

const portfolioCardsMarkup = portfolio =>
  portfolio.reduce(
    (strMarkup, { name, type, imgSrc, imgSrcset, sizes, overlayText }) =>
      strMarkup +
      `
        <li class="portfolio-card">
        <a class="portfolio-card-link" href="#">
          <div class="portfolio-img-container">
            <img
              class="portfolio-img"
              srcset="${imgSrcset}"
              sizes="${sizes}"
              src="${imgSrc}"
              alt="Photo of ${name} project"
            />
            <p class="portfolio-overlay">${overlayText}</p>
          </div>
          <div class="portfolio-item-label">
            <h3 class="portfolio-item-name">${name}</h3>
            <p class="portfolio-item-type">${type}</p>
          </div>
        </a>
      </li>
      `,
    ''
  );

export default portfolioCardsMarkup;
