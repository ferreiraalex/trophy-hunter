import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const explosive: TrophyBase = {
  island: 'combat',
  name: 'explosive',
  level: 'combat4',
  title: i18n('Explosive'),
  description: i18n(
    'Achieve a killing spree of at least five, a multi kill of at least three and a critical strike above 800.'
  ),
  category: 'combat',
};

export default explosive;
