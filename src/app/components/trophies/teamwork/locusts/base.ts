import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const locusts: TrophyBase = {
  island: 'hub',
  name: 'locusts',
  level: 'teamwork1',
  title: i18n('Locusts'),
  description: i18n(
    'Your team scores at least ten kills with at least four of your team involved (team achievement).\nARAM: 12 kills with all of your team involved'
  ),
  category: 'teamwork',
  aramSupport: true,
};

export default locusts;
