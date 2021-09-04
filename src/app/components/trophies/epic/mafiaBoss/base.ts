import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const mafiaBoss: TrophyBase = {
  island: 'epic',
  name: 'mafiaBoss',
  level: 'epic1',
  title: i18n('Mafia Boss'),
  description: i18n(
    'Achieve at least 30 assists in a match.\nARAM: 40 assists'
  ),
  category: 'epic',
  aramSupport: true,
};

export default mafiaBoss;
