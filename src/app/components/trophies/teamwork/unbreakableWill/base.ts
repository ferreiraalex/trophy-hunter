import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const unbreakableWill: TrophyBase = {
  island: 'teamwork',
  name: 'unbreakableWill',
  level: 'teamwork5',
  title: i18n('Unbreakable Will'),
  description: i18n(
    'Have highest self-mitigated damage and most assists of your team as a support.'
  ),
  category: 'teamwork',
};

export default unbreakableWill;
