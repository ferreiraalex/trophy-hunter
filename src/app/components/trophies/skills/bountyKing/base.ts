import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const bountyKing: TrophyBase = {
  island: 'hub',
  name: 'bountyKing',
  level: 'skills6',
  title: i18n('Bounty King'),
  description: i18n(
    'Have a bounty level of ten or more at the end of the match'
  ),
  category: 'skills',
  aramSupport: true,
};

export default bountyKing;
