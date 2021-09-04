import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const feedThem: TrophyBase = {
  island: 'hub',
  name: 'feedThem',
  level: 'hubTeamwork',
  title: i18n('Feed Them'),
  description: i18n(
    'Assist each of your teammates for a kill.\nARAM: Assist 3 kills to each teammate'
  ),
  category: 'teamwork',
  aramSupport: true,
};

export default feedThem;
