import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const comradeInArms: TrophyBase = {
  island: 'hub',
  name: 'comradeInArms',
  level: 'hubTeamwork',
  title: i18n('Comrade In Arms'),
  description: i18n(
    'You and a teammate score three kills with only the two of you involved.'
  ),
  category: 'teamwork',
};

export default comradeInArms;
