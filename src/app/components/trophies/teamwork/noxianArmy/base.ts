import { i18n } from '../../../../lib/i18n/i18n';
import { TrophyBase } from '../../types';

const noxianArmy: TrophyBase = {
  island: 'teamwork',
  name: 'noxianArmy',
  level: 'teamwork3',
  title: i18n('Noxian Army'),
  description: i18n(
    "Have at least eight kills, eight assists and don't die more than 6 times.\nARAM: 10 kills, 10 assists, 5 deaths"
  ),
  category: 'teamwork',
  aramSupport: true,
};

export default noxianArmy;
