import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const invade: TrophyBase = {
  island: 'teamwork',
  name: 'invade',
  level: 'teamwork6',
  title: 'INVADE!!!',
  description: i18n('Participate in a kill before minions spawn (75 sec).'),
  category: 'teamwork',
};

export default invade;
