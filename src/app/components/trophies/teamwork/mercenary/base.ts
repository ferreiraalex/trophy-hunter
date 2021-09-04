import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const mercenary: TrophyBase = {
  island: 'teamwork',
  name: 'mercenary',
  level: 'teamwork3',
  title: i18n('Mercenary'),
  description: i18n(
    'You dont miss any fight. Be involved in more than 66% of your teams kills.\nARAM: 75%'
  ),
  category: 'teamwork',
  aramSupport: true,
};

export default mercenary;
