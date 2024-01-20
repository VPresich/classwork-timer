import { TEAM_PHOTO_PATH } from '../common/constants.js';
import socialIconsMarkup from '../common/social-icons-markup.js';
import socialIconsArr from '../data/social-icons.js';
import getImgUrl from '../common/get-img-url.js';

const socialIconsAttr = {
  iconContainerClass: 'social-icon-container',
  iconLinkClass: 'social-link',
  iconClass: 'social-icon',
  iconWidth: 16,
  iconHeight: 16,
};

const teamCardsMarkup = team =>
  team.reduce(
    (strMarkup, { name, photo, position }) =>
      strMarkup +
      `
        <li class="team-card">
          <img src="${getImgUrl(TEAM_PHOTO_PATH, photo.fileName)}" 
               alt="${photo.alt}" width="264" height="260">
          <div class="team-card-label">
              <p class="team-card-position">${getImgUrl(
                TEAM_PHOTO_PATH,
                photo.fileName
              )}</p>
              <h3 class="team-card-name">${name}</h3>
              <p class="team-card-position">${position}</p>
              <ul class = "social-links">${socialIconsMarkup(
                socialIconsArr,
                socialIconsAttr
              )}</ul>
          </div>
        </li>
      `,
    ''
  );

export default teamCardsMarkup;
