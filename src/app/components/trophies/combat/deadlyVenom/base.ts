import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const deadlyVenom: TrophyBase = {
  island: 'combat',
  name: 'deadlyVenom',
  level: 'combat2',
  title: i18n('Deadly Venom'),
  description: i18n(
    'Deal at least 25% more damage to champions than the next player.'
  ),
  category: 'combat',
};

export default deadlyVenom;
