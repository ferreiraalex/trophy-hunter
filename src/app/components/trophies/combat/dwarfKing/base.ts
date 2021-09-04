import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const dwarfKing: TrophyBase = {
  island: 'combat',
  name: 'dwarfKing',
  level: 'combat3',
  title: i18n('Dwarf King'),
  description: i18n('Kill 5 opponents who have a higher level than you.'),
  category: 'combat',
};

export default dwarfKing;
