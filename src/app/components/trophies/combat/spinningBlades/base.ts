import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const spinningBlades: TrophyBase = {
  island: 'combat',
  name: 'spinningBlades',
  level: 'combat2',
  title: i18n('Spinning Blades'),
  description: i18n('Deal more than 1500 damage with Press The Attack (rune).'),
  category: 'combat',
  maxProgress: 1500,
};

export default spinningBlades;
