import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const giantsBelt: TrophyBase = {
  island: 'combat',
  name: 'giantsBelt',
  level: 'combat8',
  title: i18n('Giants Belt'),
  description: i18n(
    'It takes a lot to kill you. On Average you tank more than 20000 damage before going down.'
  ),
  category: 'combat',
};

export default giantsBelt;
