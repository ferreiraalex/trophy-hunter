import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const dominatingDamage: TrophyBase = {
  island: 'skills',
  name: 'dominatingDamage',
  level: 'skills3',
  title: i18n('Dominating Damage'),
  description: i18n('Deal more than 200k total damage.'),
  category: 'skills',
  maxProgress: 200000,
};

export default dominatingDamage;
