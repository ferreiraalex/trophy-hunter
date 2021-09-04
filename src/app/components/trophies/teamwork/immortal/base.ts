import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const immortal: TrophyBase = {
  island: 'teamwork',
  name: 'immortal',
  level: 'teamwork7',
  title: i18n('Immortal'),
  description: i18n('Win a game that lasts 25 minutes or more without dying.'),
  category: 'teamwork',
};

export default immortal;
