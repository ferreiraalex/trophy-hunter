import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const neverGiveUp: TrophyBase = {
  island: 'hub',
  name: 'neverGiveUp',
  level: 'hubEpic',
  title: i18n('Never Give Up'),
  description: i18n('Win a game even though you lost one inhibitor.'),
  category: 'epic',
};

export default neverGiveUp;
