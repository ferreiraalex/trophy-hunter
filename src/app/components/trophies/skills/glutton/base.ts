import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const glutton: TrophyBase = {
  island: 'skills',
  name: 'glutton',
  level: 'skills5',
  title: i18n('Glutton'),
  description: i18n(
    'Nom nom nom nom nom nom nom! Have most kills and most farm in the game.'
  ),
  category: 'skills',
};

export default glutton;
