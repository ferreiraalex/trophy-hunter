import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const forTheVoid: TrophyBase = {
  island: 'special',
  name: 'forTheVoid',
  level: 'special1',
  title: i18n('For The Void'),
  description: i18n('Select a champion of the void and win 3 matches.'),
  category: 'special',
  maxProgress: 3,
  aramSupport: true,
};

export default forTheVoid;
