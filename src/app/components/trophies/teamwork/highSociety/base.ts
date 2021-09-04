import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const highSociety: TrophyBase = {
  island: 'teamwork',
  name: 'highSociety',
  level: 'teamwork3',
  title: i18n('High Society'),
  description: i18n('Let others do the dirty work. Score at least 20 assists.'),
  category: 'teamwork',
  maxProgress: 20,
};

export default highSociety;
