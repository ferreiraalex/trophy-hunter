import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const experienced: TrophyBase = {
  island: 'special',
  name: 'experienced',
  level: 'special2',
  title: i18n('Experienced'),
  description: i18n('Play 50 matches with the trophy hunter app.'),
  category: 'special',
  maxProgress: 50,
  aramSupport: true,
};

export default experienced;
