import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const nurturing: TrophyBase = {
  island: 'teamwork',
  name: 'nurturing',
  level: 'teamwork7',
  title: i18n('Nurturing'),
  description: i18n(
    'Feed them when they are small. One of your teammates has most kills and damage in game. You assisted him three kills pre ten minutes.\nARAM: 7 minutes'
  ),
  category: 'teamwork',
  aramSupport: true,
};

export default nurturing;
