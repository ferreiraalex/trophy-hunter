import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const vengeance: TrophyBase = {
  island: 'hub',
  name: 'vengeance',
  level: 'combat3',
  title: i18n('Vengeance'),
  description: i18n(
    'Revenge three of your teammates deaths (kill their killer in ten seconds after their death).'
  ),
  category: 'combat',
  maxProgress: 3,
};

export default vengeance;
