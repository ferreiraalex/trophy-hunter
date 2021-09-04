import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const ninjas: TrophyBase = {
  island: 'teamwork',
  name: 'ninjas',
  level: 'teamwork6',
  title: i18n('Ninjas'),
  description: i18n(
    'You and a teammate score three kills with no other assist and no more than ten seconds between two kills.'
  ),
  category: 'teamwork',
};

export default ninjas;
