import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theWhale: TrophyBase = {
  island: 'epic',
  name: 'theWhale',
  level: 'epic2',
  title: i18n('The Whale'),
  description: i18n('Kill most minions three times in a row.'),
  category: 'epic',
  maxProgress: 3,
};

export default theWhale;
