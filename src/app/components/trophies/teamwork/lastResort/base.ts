import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const lastResort: TrophyBase = {
  island: 'teamwork',
  name: 'lastResort',
  level: 'teamwork6',
  title: i18n('Last Resort'),
  description: i18n(
    'You lost, but you have highest kill participation and least deaths on your team.'
  ),
  category: 'teamwork',
};

export default lastResort;
