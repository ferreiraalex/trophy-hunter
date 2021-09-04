import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const greyEminence: TrophyBase = {
  island: 'teamwork',
  name: 'greyEminence',
  level: 'teamwork3',
  title: i18n('Grey Eminence'),
  description: i18n(
    'Have most assists while having the least number of deaths.'
  ),
  category: 'teamwork',
};

export default greyEminence;
