import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const rockSolid: TrophyBase = {
  island: 'teamwork',
  name: 'rockSolid',
  level: 'teamwork8',
  title: i18n('Rock Solid'),
  description: i18n(
    'Counterpick: Win a game as Malphite where the opponent team dealt at least 60% physical damage to champions.'
  ),
  category: 'teamwork',
};

export default rockSolid;
