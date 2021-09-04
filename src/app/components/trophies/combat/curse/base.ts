import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

export const REQUIRED_MINUTES = 40;
const curse: TrophyBase = {
  island: 'combat',
  name: 'curse',
  level: 'combat7',
  title: i18n('Curse'),
  description: i18n(
    'The total crowd control time that you dealt exceeds 40 minutes.'
  ),
  category: 'combat',
};

export default curse;
