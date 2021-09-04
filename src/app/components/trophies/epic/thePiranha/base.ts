import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const thePiranha: TrophyBase = {
  island: 'epic',
  name: 'thePiranha',
  level: 'epic2',
  title: i18n('The Piranha'),
  description: i18n('Deal most damage to champions three times in a row.'),
  category: 'epic',
  maxProgress: 3,
};

export default thePiranha;
