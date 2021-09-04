import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const wizard: TrophyBase = {
  island: 'combat',
  name: 'wizard',
  level: 'combat4',
  title: i18n('Wizard'),
  description: i18n(
    'Deal more magic damage to champions than anyone else total damage to champions.'
  ),
  category: 'combat',
};

export default wizard;
