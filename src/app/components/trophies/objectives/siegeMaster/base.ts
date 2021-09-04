import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const siegeMaster: TrophyBase = {
  island: 'objectives',
  name: 'siegeMaster',
  level: 'objectives5',
  title: i18n('Siege Master'),
  description: i18n(
    'Have most damage dealt to turrets and kill at least five opponents near their turrets'
  ),
  category: 'objectives',
};

export default siegeMaster;
