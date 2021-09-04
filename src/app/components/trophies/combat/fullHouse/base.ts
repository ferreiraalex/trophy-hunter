import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const fullHouse: TrophyBase = {
  island: 'combat',
  name: 'fullHouse',
  level: 'combat4',
  title: i18n('Full House'),
  description: i18n(
    'Achieve a doublekill and a triplekill.\nARAM: Three doublekills and a triplekill'
  ),
  category: 'combat',
  aramSupport: true,
};

export default fullHouse;
