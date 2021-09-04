import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theCannon: TrophyBase = {
  island: 'objectives',
  name: 'theCannon',
  level: 'objectives3',
  title: i18n('The Cannon'),
  description: i18n(
    'Participate in a first turret kill before ten minutes into the game.\nARAM: Five minutes'
  ),
  category: 'objectives',
  aramSupport: true,
};

export default theCannon;
