import socialIconsMarkup from './social-icons-markup';

const socialIconsListCreate = (icons, iconsAttr, iconsContainer) => {
  const iconsMarkup = socialIconsMarkup(icons, iconsAttr);
  iconsContainer.innerHTML = '';
  iconsContainer.insertAdjacentHTML('beforeend', iconsMarkup);
};

export default socialIconsListCreate;
