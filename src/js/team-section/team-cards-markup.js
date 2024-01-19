import teamPhotoUrl from '../../img/team/card-1@1x.jpg';
import socialIconsMarkup from '../common/social-icons-markup.js';
import socialIconsArr from '../data/social-icons.js';

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
                  <img src="${teamPhotoUrl}" 
                      alt="${photo.alt}" width="264" height="260">
                  <div class="team-card-label">
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
