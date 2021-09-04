import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const theTortoise: TrophyBase = {
  island: 'epic',
  name: 'theTortoise',
  level: 'epic2',
  title: i18n('The Tortoise'),
  description: i18n('Do not die for more than 30 minutes.\nARAM: 20 minutes'),
  category: 'epic',
  aramSupport: true,
};

export default theTortoise;
