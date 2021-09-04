import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const thornmail: TrophyBase = {
  island: 'epic',
  name: 'thornmail',
  level: 'epic2',
  title: i18n('Thornmail'),
  description: i18n(
    'It takes a lot to kill you. On average you tank (damage taken + self mitigated damage) more than 40000 damage before going down.'
  ),
  category: 'epic',
};

export default thornmail;
