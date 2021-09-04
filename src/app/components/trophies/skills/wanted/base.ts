import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const wanted: TrophyBase = {
  island: 'hub',
  name: 'wanted',
  level: 'hubSkills',
  title: i18n('Wanted'),
  description: i18n(
    'Have a bounty level of one or more at the end of the match'
  ),
  category: 'skills',
  aramSupport: true,
};

export default wanted;
