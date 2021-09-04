import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const bloodBrothers: TrophyBase = {
  island: 'teamwork',
  name: 'bloodBrothers',
  level: 'teamwork2',
  title: i18n('Blood Brothers'),
  description: i18n(
    'You and a teammate score 7 kills with only the two of you involved.\nARAM: 5 kills'
  ),
  category: 'teamwork',
  aramSupport: true,
};

export default bloodBrothers;
