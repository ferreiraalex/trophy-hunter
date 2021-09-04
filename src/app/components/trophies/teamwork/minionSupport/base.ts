import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const minionSupport: TrophyBase = {
  island: 'hub',
  name: 'minionSupport',
  level: 'hubTeamwork',
  title: i18n('Minion Support'),
  description: i18n('Be involved in a kill with the support of your minions.'),
  category: 'teamwork',
  aramSupport: true,
};

export default minionSupport;
