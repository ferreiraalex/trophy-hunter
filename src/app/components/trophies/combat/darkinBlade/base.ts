import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const darkinBlade: TrophyBase = {
  island: 'combat',
  name: 'darkinBlade',
  level: 'combat6',
  title: i18n('Trinity Force'),
  description: i18n(
    'Kill an opponent in 90 seconds after you finish Guinsoos Rageblade.'
  ),
  category: 'combat',
};

export default darkinBlade;
