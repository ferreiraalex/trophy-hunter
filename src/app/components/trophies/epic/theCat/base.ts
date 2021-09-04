import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theCat: TrophyBase = {
  island: 'epic',
  name: 'theCat',
  level: 'epic2',
  title: i18n('The Cat'),
  description: i18n('Have least number of deaths three times in a row.'),
  category: 'epic',
  maxProgress: 3,
};

export default theCat;
