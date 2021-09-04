import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const careful: TrophyBase = {
  island: 'hub',
  name: 'careful',
  level: 'hubSkills',
  title: i18n('Careful'),
  description: i18n('Have the least number of deaths.'),
  category: 'skills',
};

export default careful;
