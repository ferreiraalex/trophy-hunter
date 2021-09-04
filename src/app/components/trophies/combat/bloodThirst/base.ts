import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const bloodThirst: TrophyBase = {
  island: 'combat',
  name: 'bloodThirst',
  level: 'combat5',
  title: i18n('Blood Thirst'),
  description: i18n(
    'Perform a kill every 5 minutes after minions have spawned in a 20 min+ match.'
  ),
  category: 'combat',
};

export default bloodThirst;
