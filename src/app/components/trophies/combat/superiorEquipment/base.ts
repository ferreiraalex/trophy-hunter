import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const superiorEquipment: TrophyBase = {
  island: 'combat',
  name: 'superiorEquipment',
  level: 'combat5',
  title: i18n('Superior Equipment'),
  description: i18n(
    'Have more than 1.67 times more damage dealt to champions than damage taken.'
  ),
  category: 'combat',
};

export default superiorEquipment;
