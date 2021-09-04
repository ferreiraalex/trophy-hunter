import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const deepSea: TrophyBase = {
  island: 'combat',
  name: 'deepSea',
  level: 'objectives3',
  title: i18n('Deep Sea'),
  description: i18n('Kill three water dragons on the same match.'),
  category: 'objectives',
};

export default deepSea;
