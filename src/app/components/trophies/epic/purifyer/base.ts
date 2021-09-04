import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const purifyer: TrophyBase = {
  island: 'epic',
  name: 'purifyer',
  level: 'epic1',
  title: i18n('Purifyer'),
  description: i18n('Score at least 30 kills in a match.\nARAM: 32 kills'),
  category: 'epic',
  aramSupport: true,
};

export default purifyer;
