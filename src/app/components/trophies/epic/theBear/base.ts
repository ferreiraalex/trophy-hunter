import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theBear: TrophyBase = {
  island: 'epic',
  name: 'theBear',
  level: 'epic1',
  title: i18n('The Bear'),
  description: i18n('Have highest kill participation three times in a row.'),
  category: 'epic',
  maxProgress: 3,
};

export default theBear;
