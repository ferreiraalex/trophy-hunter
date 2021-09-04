import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theTiger: TrophyBase = {
  island: 'skills',
  name: 'theTiger',
  level: 'skills6',
  title: i18n('The Tiger'),
  description: i18n('Have most kills three times in a row.'),
  category: 'skills',
  maxProgress: 3,
};

export default theTiger;
