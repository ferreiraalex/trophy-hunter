import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const healer: TrophyBase = {
  island: 'teamwork',
  name: 'healer',
  level: 'teamwork7',
  title: i18n('Healer'),
  description: i18n('Heal five players and at least 25000 damage.'),
  category: 'teamwork',
};

export default healer;
