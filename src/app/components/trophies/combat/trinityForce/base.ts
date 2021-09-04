import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const trinityForce: TrophyBase = {
  island: 'combat',
  name: 'trinityForce',
  level: 'combat3',
  title: i18n('Trinity Force'),
  description: i18n(
    'Use your powerspike. Kill an opponent in the three minutes after you finish Trinity Force.'
  ),
  category: 'combat',
};

export default trinityForce;
