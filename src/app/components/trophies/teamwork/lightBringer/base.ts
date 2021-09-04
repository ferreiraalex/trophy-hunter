import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const lightBringer: TrophyBase = {
  island: 'teamwork',
  name: 'lightBringer',
  level: 'teamwork3',
  title: i18n('Light Bringer'),
  description: i18n('Place at least 25 wards.'),
  category: 'teamwork',
  maxProgress: 25,
};

export default lightBringer;
