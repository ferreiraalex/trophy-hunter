import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

export const REQUIRED_DRAGONS = 5;
const dragonHunter: TrophyBase = {
  island: 'hub',
  name: 'dragonHunter',
  level: 'hubObjectives',
  title: i18n('Dragon Hunter'),
  description: i18n('Kill 5 dragons (team achievement).'),
  category: 'objectives',
  maxProgress: REQUIRED_DRAGONS,
};

export default dragonHunter;
