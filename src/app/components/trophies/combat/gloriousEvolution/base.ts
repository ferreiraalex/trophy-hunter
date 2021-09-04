import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const gloriousEvolution: TrophyBase = {
  island: 'combat',
  name: 'gloriousEvolution',
  level: 'combat8',
  title: i18n('Glorious Evolution'),
  description: i18n(
    'Win a 30+ minute game, where you dealt most damage and did not die in the last 5 minutes of the game.'
  ),
  category: 'combat',
};

export default gloriousEvolution;
