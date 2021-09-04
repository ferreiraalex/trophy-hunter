import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const oneTrickPony: TrophyBase = {
  island: 'special',
  name: 'oneTrickPony',
  level: 'special4',
  title: i18n('One Trick Pony'),
  description: i18n(
    'Play the same champion in the last five matches and win all of them.'
  ),
  category: 'special',
  maxProgress: 5,
  aramSupport: true,
};

export default oneTrickPony;
