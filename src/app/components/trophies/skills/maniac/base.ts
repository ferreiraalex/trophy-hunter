import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const maniac: TrophyBase = {
  island: 'skills',
  name: 'maniac',
  level: 'skills2',
  title: i18n('Maniac'),
  description: i18n('Score at least 10 kills in a match.\nARAM: 12 kills'),
  category: 'skills',
  aramSupport: true,
};

export default maniac;
