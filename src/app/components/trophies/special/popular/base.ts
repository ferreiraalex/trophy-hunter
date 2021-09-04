import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const popular: TrophyBase = {
  island: 'special',
  name: 'popular',
  level: 'special1',
  title: i18n('Popular'),
  description: i18n('Play 10 matches with another trophy hunter.'),
  category: 'special',
  maxProgress: 10,
  aramSupport: true,
};

export default popular;
