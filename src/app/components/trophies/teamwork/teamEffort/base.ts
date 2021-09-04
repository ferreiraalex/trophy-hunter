import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const teamEffort: TrophyBase = {
  island: 'teamwork',
  name: 'teamEffort',
  level: 'teamwork1',
  title: i18n('Team Effort'),
  description: i18n(
    'Be part of at least three kills with everyone of your team involved.\nARAM: Nine kills'
  ),
  category: 'teamwork',
  aramSupport: true,
};

export default teamEffort;
