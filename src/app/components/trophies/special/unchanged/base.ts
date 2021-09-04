import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const unchanged: TrophyBase = {
  island: 'special',
  name: 'unchanged',
  level: 'special1',
  title: i18n('Unchanged'),
  description: i18n('Play the same champion three times in a row.'),
  category: 'special',
  maxProgress: 3,
  aramSupport: true,
};

export default unchanged;
