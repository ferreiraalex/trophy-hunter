import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const sasquatch: TrophyBase = {
  island: 'teamwork',
  name: 'sasquatch',
  level: 'teamwork4',
  title: i18n('Sasquatch'),
  description: i18n(
    'Assist at least 3 of your teammates a kill before 12 minutes.'
  ),
  category: 'teamwork',
};

export default sasquatch;
