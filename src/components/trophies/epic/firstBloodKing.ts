import { Trophy } from '../types';
import { getParticipantByAccount } from '../../../api/riot/helpers';
import { getTrophyProgress } from '../../../api/accounts/helpers';

const firstBloodKing: Trophy = {
  island: 'epicIsland',
  name: 'firstBloodKing',
  level: 'epic1',
  title: 'First Blood King',
  description: 'Get first blood 3 matches in a row.',
  category: 'epic',
  maxProgress: 3,
  checkProgress: ({ match, account }) => {
    const participant = getParticipantByAccount(match, account);

    if (!participant.stats.firstBloodKill) {
      return 0;
    }
    const trophyProgress = getTrophyProgress(account, 'firstBloodKing');
    return Number(participant.stats.firstBloodKill) / 3 + trophyProgress;
  },
  checkLive: ({ events, account }) => {
    const firstKill = events.find(
      (event) => event.EventName === 'ChampionKill'
    );

    const firstBloodKill =
      firstKill && firstKill.KillerName === account.summoner.name;

    if (!firstBloodKill) {
      return 0;
    }

    const trophyProgress = getTrophyProgress(account, 'firstBloodKing');

    return Number(firstBloodKill) / 3 + trophyProgress;
  },
};

export default firstBloodKing;
