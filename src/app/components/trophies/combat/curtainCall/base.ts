import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const curtainCall: TrophyBase = {
  island: 'combat',
  name: 'curtainCall',
  level: 'combat6',
  title: i18n('Curtain Call'),
  description: i18n(
    'Take the last kill in a teamfight twice in a game (Teamfight: at least four kills in 15 seconds and 2500 units).'
  ),
  category: 'combat',
};

export default curtainCall;
