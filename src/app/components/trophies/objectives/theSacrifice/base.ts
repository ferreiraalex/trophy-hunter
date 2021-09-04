import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theSacrifice: TrophyBase = {
  island: 'objectives',
  name: 'theSacrifice',
  level: 'objectives5',
  title: i18n('The Sacrifice'),
  description: i18n(
    'Secure your team an elite monster, eventhough you die in the five seconds after that.'
  ),
  category: 'objectives',
};

export default theSacrifice;
