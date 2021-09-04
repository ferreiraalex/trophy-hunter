import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const noxianKnight: TrophyBase = {
  island: 'skills',
  name: 'noxianKnight',
  level: 'skills2',
  title: i18n('Noxian Knight'),
  description: i18n(
    'Be involved in 60% of your teams kills and achieve level 18.\nARAM: 85%'
  ),
  category: 'skills',
  aramSupport: true,
};

export default noxianKnight;
