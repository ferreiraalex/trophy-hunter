import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const jungleOfTraps: TrophyBase = {
  island: 'teamwork',
  name: 'jungleOfTraps',
  level: 'teamwork7',
  title: i18n('Jungle Of Traps'),
  description: i18n(
    'Place at least four control wards, remove four enemy wards, kill two dragons and score a killing spree.'
  ),
  category: 'teamwork',
};

export default jungleOfTraps;
