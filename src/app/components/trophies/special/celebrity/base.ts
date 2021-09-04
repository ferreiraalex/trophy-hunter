import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const celebrity: TrophyBase = {
  island: 'special',
  name: 'celebrity',
  level: 'special4',
  title: i18n('Celebrity'),
  description: i18n('Play 100 matches with another trophy hunter.'),
  category: 'special',
  maxProgress: 100,
  aramSupport: true,
};

export default celebrity;
