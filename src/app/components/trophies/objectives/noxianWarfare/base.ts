import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const noxianWarfare: TrophyBase = {
  island: 'objectives',
  name: 'noxianWarfare',
  level: 'objectives4',
  title: i18n('Noxian Warfare'),
  description: i18n(
    'Have most buildings destroyed (turrets & inhibitors) three times in a row.'
  ),
  category: 'objectives',
  maxProgress: 3,
};

export default noxianWarfare;
