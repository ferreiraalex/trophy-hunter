import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const friendly: TrophyBase = {
  island: 'hub',
  name: 'friendly',
  level: 'hubSpecial',
  title: i18n('Friendly'),
  description: i18n('Play 2 matches with another trophy hunter.'),
  category: 'special',
  maxProgress: 2,
  aramSupport: true,
};

export default friendly;
