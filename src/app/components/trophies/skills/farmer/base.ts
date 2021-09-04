import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const farmer: TrophyBase = {
  island: 'hub',
  name: 'farmer',
  level: 'hubSkills',
  title: i18n('Farmer'),
  description: i18n('Farm more than 200 minions.'),
  category: 'skills',
};

export default farmer;
