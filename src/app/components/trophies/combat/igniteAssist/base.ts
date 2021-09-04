import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const igniteAssist: TrophyBase = {
  island: 'combat',
  name: 'igniteAssist',
  level: 'combat1',
  title: i18n('Ignite Assist'),
  description: i18n('Assist a kill with your ignite spell.'),
  category: 'combat',
  aramSupport: true,
};

export default igniteAssist;
