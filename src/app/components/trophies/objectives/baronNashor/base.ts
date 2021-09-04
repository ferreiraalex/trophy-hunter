import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const baronNashor: TrophyBase = {
  island: 'combat',
  name: 'baronNashor',
  level: 'objectives1',
  title: i18n('Baron Nashor'),
  description: i18n(
    'Kill the giant worm called Baron Nashor twice on the same match.'
  ),
  category: 'objectives',
};

export default baronNashor;
