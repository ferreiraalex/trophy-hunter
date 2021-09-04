import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const siegeRam: TrophyBase = {
  island: 'hub',
  name: 'siegeRam',
  level: 'hubObjectives',
  title: i18n('Siege Ram'),
  description: i18n('Have most damage dealt to turrets of your team.'),
  category: 'objectives',
};

export default siegeRam;
