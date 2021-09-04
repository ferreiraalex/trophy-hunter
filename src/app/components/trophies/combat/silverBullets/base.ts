import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const silverBullets: TrophyBase = {
  island: 'combat',
  name: 'silverBullets',
  level: 'combat4',
  title: i18n('Silver Bullets'),
  description: i18n(
    'Deal more physical damage to champions than anyone else total damage to champions.'
  ),
  category: 'combat',
};

export default silverBullets;
