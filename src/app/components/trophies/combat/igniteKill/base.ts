import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const igniteKill: TrophyBase = {
  island: 'combat',
  name: 'igniteKill',
  level: 'combat7',
  title: i18n('Ignite Kill'),
  description: i18n('Kill someone with your ignite spell.'),
  category: 'combat',
  aramSupport: true,
};

export default igniteKill;
