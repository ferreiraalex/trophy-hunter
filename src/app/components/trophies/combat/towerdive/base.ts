import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const towerdive: TrophyBase = {
  island: 'combat',
  name: 'towerdive',
  level: 'combat3',
  title: i18n('Towerdive'),
  description: i18n(
    'Kill an opponent underneath his turret before the first turret falls without dying in the next 10 seconds.'
  ),
  category: 'combat',
};

export default towerdive;
