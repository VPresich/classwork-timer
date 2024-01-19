import team from '../data/team';
import teamCardsCreate from './team-cads-create';

const teamListRef = document.querySelector('.team');
teamCardsCreate(team, teamListRef);
