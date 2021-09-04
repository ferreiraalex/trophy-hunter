import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const neutralizer: TrophyBase = {
  island: 'objectives',
  name: 'neutralizer',
  level: 'objectives1',
  title: i18n('Neutralizer'),
  description: i18n(
    'Participate in clearing three baron buffs from the opposing team (kill an opponent with baron buff).'
  ),
  category: 'objectives',
};

export default neutralizer;
