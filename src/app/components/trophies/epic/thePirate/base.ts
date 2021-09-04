import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const thePirate: TrophyBase = {
  island: 'epic',
  name: 'thePirate',
  level: 'epic2',
  title: i18n('The Pirate'),
  description: i18n(
    'Secure Baron Nashor eventhough two of your teammates died in the last 40 seconds.'
  ),
  category: 'epic',
};

export default thePirate;
