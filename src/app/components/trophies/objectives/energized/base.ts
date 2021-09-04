import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const energized: TrophyBase = {
  island: 'objectives',
  name: 'energized',
  level: 'objectives1',
  title: i18n('Energized'),
  description: i18n('Take down at least 5 buildings during a baron buff.'),
  category: 'objectives',
  maxProgress: 5,
};

export default energized;
