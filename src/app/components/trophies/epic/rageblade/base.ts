import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const rageblade: TrophyBase = {
  island: 'epic',
  name: 'rageblade',
  level: 'epic1',
  title: i18n('Rageblade'),
  description: i18n(
    'Deal more than 75000 total damage to champions.\nARAM: 80000 total damage'
  ),
  category: 'epic',
  aramSupport: true,
};

export default rageblade;
