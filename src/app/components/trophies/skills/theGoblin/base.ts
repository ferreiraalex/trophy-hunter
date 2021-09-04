import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theGoblin: TrophyBase = {
  island: 'skills',
  name: 'theGoblin',
  level: 'skills6',
  title: i18n('The Goblin'),
  description: i18n('Have most jungle cs three times in a row.'),
  category: 'skills',
  maxProgress: 3,
};

export default theGoblin;
