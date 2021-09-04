import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const firstBloodKing: TrophyBase = {
  island: 'epic',
  name: 'firstBloodKing',
  level: 'epic1',
  title: i18n('First Blood King'),
  description: i18n('Get first blood 3 matches in a row.'),
  category: 'epic',
  maxProgress: 3,
};

export default firstBloodKing;
