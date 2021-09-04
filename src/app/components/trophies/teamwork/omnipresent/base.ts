import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const omnipresent: TrophyBase = {
  island: 'teamwork',
  name: 'omnipresent',
  level: 'teamwork7',
  title: i18n('Omnipresent'),
  description: i18n(
    'Be involved in more than 80% of your teams kills.\nARAM: 90%'
  ),
  category: 'teamwork',
  aramSupport: true,
};

export default omnipresent;
