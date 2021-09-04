import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const ancient: TrophyBase = {
  island: 'special',
  name: 'ancient',
  level: 'special4',
  title: i18n('Ancient'),
  description: i18n('Play 500 matches with the trophy hunter app.'),
  category: 'special',
  maxProgress: 500,
  aramSupport: true,
};

export default ancient;
