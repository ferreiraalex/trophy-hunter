import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const explosiveCharge: TrophyBase = {
  island: 'objectives',
  name: 'explosiveCharge',
  level: 'objectives2',
  title: i18n('Explosive Charge'),
  description: i18n('Deal more than 10000 damage to turrets.'),
  category: 'objectives',
};

export default explosiveCharge;
