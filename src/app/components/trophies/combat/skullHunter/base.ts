import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const skullHunter: TrophyBase = {
  island: 'combat',
  name: 'skullHunter',
  level: 'combat1',
  title: i18n('Skull Hunter'),
  description: i18n('Be involved in at least 20 kills.'),
  category: 'combat',
  maxProgress: 20,
};

export default skullHunter;
