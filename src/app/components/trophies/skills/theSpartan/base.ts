import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theSpartan: TrophyBase = {
  island: 'skills',
  name: 'theSpartan',
  level: 'skills4',
  title: i18n('The Spartan'),
  description: i18n(
    'Have a 1200 xp lead over the opposing solo laner at 10 minutes (approximatley 1.5 level difference).'
  ),
  category: 'skills',
};

export default theSpartan;
