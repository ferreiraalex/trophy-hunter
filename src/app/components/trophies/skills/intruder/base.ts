import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const intruder: TrophyBase = {
  island: 'skills',
  name: 'intruder',
  level: 'skills3',
  title: i18n('Intruder'),
  description: i18n(
    'Be 15 cs ahead of the enemy jungler at 10 minutes as jungler.'
  ),
  category: 'skills',
};

export default intruder;
