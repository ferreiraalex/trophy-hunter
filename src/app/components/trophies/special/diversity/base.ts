import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const diversity: TrophyBase = {
  island: 'hub',
  name: 'diversity',
  level: 'hubSpecial',
  title: i18n('Diversity'),
  description: i18n('Play three different champions.'),
  category: 'special',
  maxProgress: 3,
  aramSupport: true,
};

export default diversity;
