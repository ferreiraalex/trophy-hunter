import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const wisdom: TrophyBase = {
  island: 'special',
  name: 'wisdom',
  level: 'special4',
  title: i18n('Wisdom'),
  description: i18n('Play 100 matches with the trophy hunter app.'),
  category: 'special',
  maxProgress: 100,
  aramSupport: true,
};

export default wisdom;
