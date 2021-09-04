import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const famous: TrophyBase = {
  island: 'special',
  name: 'famous',
  level: 'special3',
  title: i18n('Famous'),
  description: i18n('Play 40 matches with another trophy hunter.'),
  category: 'special',
  maxProgress: 40,
  aramSupport: true,
};

export default famous;
