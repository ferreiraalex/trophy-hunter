import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theZombie: TrophyBase = {
  island: 'hub',
  name: 'theZombie',
  level: 'combat5',
  title: i18n('The Zombie'),
  description: i18n(
    'Score at least two kills being dead (ten seconds after death).\nARAM: Three kills'
  ),
  category: 'combat',
  aramSupport: true,
};

export default theZombie;
