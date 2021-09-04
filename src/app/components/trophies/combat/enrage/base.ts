import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const enrage: TrophyBase = {
  island: 'hub',
  name: 'enrage',
  level: 'hubCombat',
  title: i18n('Enrage'),
  description: i18n('Score at least three killing sprees.'),
  category: 'combat',
  maxProgress: 3,
};

export default enrage;
