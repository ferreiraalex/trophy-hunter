import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const noxianShield: TrophyBase = {
  island: 'teamwork',
  name: 'noxianShield',
  level: 'teamwork3',
  title: i18n('Noxian Shield'),
  description: i18n(
    'Tank most damage of your team while having the least number of deaths of your team.'
  ),
  category: 'teamwork',
};

export default noxianShield;
