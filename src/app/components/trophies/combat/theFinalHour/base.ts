import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theFinalHour: TrophyBase = {
  island: 'combat',
  name: 'theFinalHour',
  level: 'combat5',
  title: i18n('The Final Hour'),
  description: i18n(
    'Get at least ten kills in the last ten minutes of the game.\nARAM: 14 kills'
  ),
  category: 'combat',
  aramSupport: true,
};

export default theFinalHour;
