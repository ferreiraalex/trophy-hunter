import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const preserver: TrophyBase = {
  island: 'teamwork',
  name: 'preserver',
  level: 'teamwork8',
  title: i18n('Preserver'),
  description: i18n(
    'Heal more damage than any opposing player dealt damage to champions.'
  ),
  category: 'teamwork',
};

export default preserver;
