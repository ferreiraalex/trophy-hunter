import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const skullMedal: TrophyBase = {
  island: 'objectives',
  name: 'skullMedal',
  level: 'objectives2',
  title: i18n('Skull Medal'),
  description: i18n(
    'Score two killing sprees and destruct at least two inhibitors.'
  ),
  category: 'objectives',
};

export default skullMedal;
