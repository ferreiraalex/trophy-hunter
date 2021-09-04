import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const specialist: TrophyBase = {
  island: 'special',
  name: 'specialist',
  level: 'special2',
  title: i18n('Specialist'),
  description: i18n('Complete five missions.'),
  category: 'special',
  maxProgress: 5,
  aramSupport: true,
};

export default specialist;
