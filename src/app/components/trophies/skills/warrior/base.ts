import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const warrior: TrophyBase = {
  island: 'hub',
  name: 'warrior',
  level: 'hubSkills',
  title: i18n('Warrior'),
  description: i18n('Have a KDA of at least 1.5'),
  category: 'skills',
  aramSupport: true,
};

export default warrior;
