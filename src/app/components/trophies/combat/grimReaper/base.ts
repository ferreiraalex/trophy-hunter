import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const grimReaper: TrophyBase = {
  island: 'combat',
  name: 'grimReaper',
  level: 'combat6',
  title: i18n('Grim Reaper'),
  description: i18n(
    "You're gonna get them in the end. Score three kills in the last minute of the game."
  ),
  category: 'combat',
};

export default grimReaper;
