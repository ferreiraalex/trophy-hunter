import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const snowball: TrophyBase = {
  island: 'combat',
  name: 'snowball',
  level: 'combat4',
  title: i18n('Snowball'),
  description: i18n(
    'Achieve five kills before twelve minutes.\nARAM: Seven kills'
  ),
  category: 'combat',
  aramSupport: true,
};

export default snowball;
