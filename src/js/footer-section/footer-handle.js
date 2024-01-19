import socialIconsListCreate from '../common/social-icons-list-create';
import socialIconsArr from '../data/social-icons';

const socialIconsAttr = {
  iconContainerClass: 'footer-social-icon-container',
  iconLinkClass: 'footer-social-link',
  iconClass: 'footer-social-icon',
  iconWidth: 24,
  iconHeight: 24,
};

const foterSocialIconsRef = document.querySelector('.footer-social-links');
socialIconsListCreate(socialIconsArr, socialIconsAttr, foterSocialIconsRef);
