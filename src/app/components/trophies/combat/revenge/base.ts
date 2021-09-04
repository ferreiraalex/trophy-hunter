import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const revenge: TrophyBase = {
  island: 'combat',
  name: 'revenge',
  level: 'combat3',
  title: 'REVENGE!!!',
  description: i18n(
    'Kill your killer in the 30 seconds after you have respawned.'
  ),
  category: 'combat',
};

export default revenge;
