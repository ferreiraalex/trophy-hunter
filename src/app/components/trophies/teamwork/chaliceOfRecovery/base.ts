import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const chaliceOfRecovery: TrophyBase = {
  island: 'teamwork',
  name: 'chaliceOfRecovery',
  level: 'teamwork2',
  title: i18n('Chalice Of Recovery'),
  description: i18n('Win a match where your team was 4000 gold behind.'),
  category: 'teamwork',
};

export default chaliceOfRecovery;
