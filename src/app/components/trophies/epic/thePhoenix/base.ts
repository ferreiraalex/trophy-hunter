import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const thePhoenix: TrophyBase = {
  island: 'epic',
  name: 'thePhoenix',
  level: 'epic2',
  title: i18n('The Phoenix'),
  description: i18n('Win a game even though you lost three inhibitors.'),
  category: 'epic',
};

export default thePhoenix;
