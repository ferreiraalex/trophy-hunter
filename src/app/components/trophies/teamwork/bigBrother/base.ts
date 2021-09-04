import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const bigBrother: TrophyBase = {
  island: 'teamwork',
  name: 'bigBrother',
  level: 'teamwork6',
  title: i18n('Big Brother'),
  description: i18n('Have the highest vision score three matches in a row.'),
  category: 'teamwork',
  maxProgress: 3,
};

export default bigBrother;
