import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const flail: TrophyBase = {
  island: 'combat',
  name: 'flail',
  level: 'combat1',
  title: i18n('Flail'),
  description: i18n(
    'Have the highest damage to champions output per gold. (damage / gold works similar to KDA)'
  ),
  category: 'combat',
};

export default flail;
