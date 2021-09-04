import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const tripleKill: TrophyBase = {
  island: 'combat',
  name: 'tripleKill',
  level: 'combat4',
  title: i18n('Triple Kill'),
  description: i18n('Achieve a triplekill.'),
  category: 'combat',
};

export default tripleKill;
