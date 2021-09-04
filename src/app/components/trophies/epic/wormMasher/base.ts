import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const wormMasher: TrophyBase = {
  island: 'epic',
  name: 'wormMasher',
  level: 'epic2',
  title: i18n('Worm Masher'),
  description: i18n(
    'Kill the giant worm called Baron Nashor three times in a match.'
  ),
  category: 'epic',
};

export default wormMasher;
