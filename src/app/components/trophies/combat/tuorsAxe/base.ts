import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const tuorsAxe: TrophyBase = {
  island: 'combat',
  name: 'tuorsAxe',
  level: 'combat5',
  title: i18n('Tuors Axe'),
  description: i18n(
    'Deal at least 50% more damage to champions than the next player.'
  ),
  category: 'combat',
};

export default tuorsAxe;
