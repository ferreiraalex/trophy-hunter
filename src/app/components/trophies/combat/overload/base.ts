import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const overload: TrophyBase = {
  island: 'combat',
  name: 'overload',
  level: 'combat3',
  title: i18n('Overload'),
  description: i18n('Deal more than 2500 damage with Electrocute (rune).'),
  category: 'combat',
  maxProgress: 2500,
};

export default overload;
