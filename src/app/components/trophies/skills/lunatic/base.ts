import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const lunatic: TrophyBase = {
  island: 'skills',
  name: 'lunatic',
  level: 'skills4',
  title: i18n('Lunatic'),
  description: i18n('Score at least 20 kills in a match.\nARAM: 24 kills'),
  category: 'skills',
  aramSupport: true,
};

export default lunatic;
