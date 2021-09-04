import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const rejuvenation: TrophyBase = {
  island: 'teamwork',
  name: 'rejuvenation',
  level: 'teamwork4',
  title: i18n('Rejuvenation'),
  description: i18n('Heal more than 4000 with Fleet Footwork (rune).'),
  category: 'teamwork',
  maxProgress: 4000,
};

export default rejuvenation;
