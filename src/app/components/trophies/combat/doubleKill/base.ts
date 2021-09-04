import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const doubleKill: TrophyBase = {
  island: 'combat',
  name: 'doubleKill',
  level: 'combat1',
  title: i18n('Double Kill'),
  description: i18n('Achieve a double kill.'),
  category: 'combat',
};

export default doubleKill;
