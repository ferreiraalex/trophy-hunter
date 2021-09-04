import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const rockSurfing: TrophyBase = {
  island: 'teamwork',
  name: 'rockSurfing',
  level: 'teamwork8',
  title: i18n('Rock Surfing'),
  description: i18n(
    'Participate in two kills on bottom lane before 10 minutes as a midlaner.'
  ),
  category: 'teamwork',
};

export default rockSurfing;
