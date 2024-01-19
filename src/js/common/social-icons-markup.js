import spriteUrl from '/img/icons/icons.svg';

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
                    width="${iconWidth}" height="${iconHeight}" aria-label="${icon.label}">
                    <use href="${spriteUrl}${icon.id}"></use>
                    </svg>
                </a>
        </li>
    `,
    ''
  );
};

export default socialIconsMarkup;
