import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const trophyHunter: TrophyBase = {
  island: 'hub',
  name: 'trophyHunter',
  level: 'hubCombat',
  title: i18n('Trophy Hunter'),
  description: i18n('Kill each unique enemy champion at least once.'),
  category: 'combat',
};

export default trophyHunter;
