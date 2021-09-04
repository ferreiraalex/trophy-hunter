import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const clothArmor: TrophyBase = {
  island: 'combat',
  name: 'clothArmor',
  level: 'combat3',
  title: i18n('Cloth Armor'),
  description: i18n(
    'It takes a lot to kill you. On Average you tank more than 10000 damage before going down.'
  ),
  category: 'combat',
};

export default clothArmor;
