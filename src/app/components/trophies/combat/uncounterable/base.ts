import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const uncounterable: TrophyBase = {
  island: 'combat',
  name: 'uncounterable',
  level: 'combat3',
  title: i18n('Uncounterable'),
  description: i18n('Deal more than 5000 true damage to champions.'),
  category: 'combat',
  maxProgress: 5000,
};

export default uncounterable;
