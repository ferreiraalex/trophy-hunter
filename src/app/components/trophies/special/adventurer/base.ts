import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const adventurer: TrophyBase = {
  island: 'special',
  name: 'adventurer',
  level: 'special1',
  title: i18n('Adventurer'),
  description: i18n('Play 30 matches with the trophy hunter app.'),
  category: 'special',
  maxProgress: 30,
  aramSupport: true,
};

export default adventurer;
