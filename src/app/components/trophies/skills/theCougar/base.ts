import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theCougar: TrophyBase = {
  island: 'skills',
  name: 'theCougar',
  level: 'skills5',
  title: i18n('The Cougar'),
  description: i18n(
    'Have a 1000 gold lead over the opposing jungler as a jungler at 10 minutes.'
  ),
  category: 'skills',
};

export default theCougar;
