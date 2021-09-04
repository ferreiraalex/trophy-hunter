import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const guardianAngel: TrophyBase = {
  island: 'teamwork',
  name: 'guardianAngel',
  level: 'teamwork6',
  title: i18n('Guardian Angel'),
  description: i18n(
    'Heal 15000 (total) damage to 5 players, score 12 assists and place 18 wards.'
  ),
  category: 'teamwork',
};

export default guardianAngel;
