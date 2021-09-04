import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const privateFirstClass: TrophyBase = {
  island: 'special',
  name: 'privateFirstClass',
  level: 'special1',
  title: i18n('Private First Class'),
  description: i18n('Complete three missions.'),
  category: 'special',
  maxProgress: 3,
  aramSupport: true,
};

export default privateFirstClass;
