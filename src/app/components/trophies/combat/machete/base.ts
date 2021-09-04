import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const machete: TrophyBase = {
  island: 'combat',
  name: 'machete',
  level: 'combat5',
  title: i18n('Machete'),
  description: i18n('Deal more than 50000 total damage to champions.'),
  category: 'combat',
  maxProgress: 50000,
};

export default machete;
