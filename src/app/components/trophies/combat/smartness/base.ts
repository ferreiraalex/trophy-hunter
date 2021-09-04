import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const smartness: TrophyBase = {
  island: 'combat',
  name: 'smartness',
  level: 'combat2',
  title: i18n('Smartness'),
  description: i18n(
    'Score a killing spree, at least ten assists and die at most five times.'
  ),
  category: 'combat',
};

export default smartness;
