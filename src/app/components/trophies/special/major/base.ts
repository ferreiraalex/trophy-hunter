import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const major: TrophyBase = {
  island: 'special',
  name: 'major',
  level: 'special4',
  title: i18n('Major'),
  description: i18n('Complete 20 missions.'),
  category: 'special',
  maxProgress: 20,
  aramSupport: true,
};

export default major;
