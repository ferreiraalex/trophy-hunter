import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const firstBlood: TrophyBase = {
  island: 'combat',
  name: 'firstBlood',
  level: 'combat1',
  title: i18n('First Blood'),
  description: i18n('Take first blood.'),
  category: 'combat',
};

export default firstBlood;
