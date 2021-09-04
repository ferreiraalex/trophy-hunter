import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const sinisterBlades: TrophyBase = {
  island: 'combat',
  name: 'sinisterBlades',
  level: 'combat6',
  title: i18n('Sinister Blades'),
  description: i18n(
    'Achieve at least four multikills (double-, triple-, quadra- or pentakill).\nARAM: Seven multikills'
  ),
  category: 'combat',
  aramSupport: true,
};

export default sinisterBlades;
