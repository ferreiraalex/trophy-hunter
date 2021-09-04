import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const criminal: TrophyBase = {
  island: 'hub',
  name: 'criminal',
  level: 'skills4',
  title: i18n('Criminal'),
  description: i18n(
    'Have a bounty level of three or more at the end of the match'
  ),
  category: 'skills',
  aramSupport: true,
};

export default criminal;
