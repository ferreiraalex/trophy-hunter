import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const earlyBird: TrophyBase = {
  island: 'objectives',
  name: 'earlyBird',
  level: 'objectives2',
  title: i18n('Early Bird'),
  description: i18n('Take first blood and first turret (or assist).'),
  category: 'objectives',
};

export default earlyBird;
