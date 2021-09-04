import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const greenhorn: TrophyBase = {
  island: 'hub',
  name: 'greenhorn',
  level: 'hubSpecial',
  title: i18n('Greenhorn'),
  description: i18n('Play ten matches with the trophy hunter app.'),
  category: 'special',
  maxProgress: 10,
  aramSupport: true,
};

export default greenhorn;
