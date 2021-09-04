import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theHive: TrophyBase = {
  island: 'epic',
  name: 'theHive',
  level: 'epic2',
  title: i18n('The Hive'),
  description: i18n(
    'Your team kills every enemy champion with all of your team being involved.\nARAM: 12 kills with all of your team involved'
  ),
  category: 'epic',
  aramSupport: true,
};

export default theHive;
