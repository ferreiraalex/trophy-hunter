import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const wolfPack: TrophyBase = {
  island: 'combat',
  name: 'wolfPack',
  level: 'combat6',
  title: i18n('Wolf Pack'),
  description: i18n(
    'Participate in a kill in the enemy jungle in the first ten minutes.'
  ),
  category: 'combat',
};

export default wolfPack;
