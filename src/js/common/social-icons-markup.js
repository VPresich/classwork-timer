import { SPRITE_PATH } from './constants.js';

const socialIconsMarkup = (icons, iconsAttr) => {
  const {
    iconContainerClass,
    iconLinkClass,
    iconClass,
    iconWidth,
    iconHeight,
  } = iconsAttr;
  return icons.reduce(
    (strMarkup, icon) =>
      strMarkup +
      `
        <li class="${iconContainerClass}">
                <a class="${iconLinkClass}" target="_blank" href="${icon.url}">
                    <svg class="${iconClass}" 
                    width="${iconWidth}" height="${iconHeight}" aria-label="${
        icon.label
      }">
                    <use href="${SPRITE_PATH + icon.id}"></use>
                    </svg>
                </a>
        </li>
    `,
    ''
  );
};

export default socialIconsMarkup;
