import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const unleashThePower: TrophyBase = {
  island: 'combat',
  name: 'unleashThePower',
  level: 'combat4',
  title: i18n('Unleash The Power'),
  description: i18n(
    'Achieve a kill in the 30 seconds after you reached level six.\nARAM: 20 seconds'
  ),
  category: 'combat',
  aramSupport: true,
};

export default unleashThePower;
