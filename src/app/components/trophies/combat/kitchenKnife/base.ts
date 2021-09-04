import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const kitchenKnife: TrophyBase = {
  island: 'hub',
  name: 'kitchenKnife',
  level: 'hubCombat',
  title: i18n('Kitchen Knife'),
  description: i18n(
    'Deal more than 30000 total damage to champions.\nARAM: 35000 damage'
  ),
  category: 'combat',
  aramSupport: true,
};

export default kitchenKnife;
