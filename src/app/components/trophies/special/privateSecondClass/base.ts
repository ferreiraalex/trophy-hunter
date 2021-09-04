import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const privateSecondClass: TrophyBase = {
  island: 'special',
  name: 'privateSecondClass',
  level: 'hubSpecial',
  title: i18n('Private Second Class'),
  description: i18n('Complete two missions.'),
  category: 'special',
  maxProgress: 2,
  aramSupport: true,
};

export default privateSecondClass;
