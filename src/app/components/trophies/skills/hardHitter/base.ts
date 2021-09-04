import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const hardHitter: TrophyBase = {
  island: 'skills',
  name: 'hardHitter',
  level: 'skills3',
  title: i18n('Hard Hitter'),
  description: i18n('Deal more than 150k total damage.'),
  category: 'skills',
  maxProgress: 150000,
};

export default hardHitter;
