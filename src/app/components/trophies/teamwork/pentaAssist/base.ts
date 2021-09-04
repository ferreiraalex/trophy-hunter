import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const pentaAssist: TrophyBase = {
  island: 'teamwork',
  name: 'pentaAssist',
  level: 'teamwork7',
  title: i18n('Penta Assist'),
  description: i18n(
    'Achieve five assists with no more than 20 seconds between two successive assists.\nARAM: Achieve two penta assists'
  ),
  category: 'teamwork',
  aramSupport: true,
};

export default pentaAssist;
