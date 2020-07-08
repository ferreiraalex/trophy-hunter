import { Trophy } from '../types';
import { getParticipantByAccount } from '../../../api/riot/helpers';

const glutton: Trophy = {
  island: 'skillsIsland',
  name: 'glutton',
  level: 'skills5',
  title: 'Glutton',
  description:
    'Nom nom nom nom nom nom nom! Have most kills and most farm in the game.',
  category: 'skills',
  checkProgress: ({ match, account }) => {
    const participant = getParticipantByAccount(match, account);

    const maxKills = Math.max(
      ...match.participants.map((participant) => participant.stats.kills)
    );

    const maxTotalMinionsKilled = Math.max(
      ...match.participants.map(
        (participant) => participant.stats.totalMinionsKilled
      )
    );

    return Number(
      participant.stats.kills >= maxKills &&
        participant.stats.totalMinionsKilled >= maxTotalMinionsKilled
    );
  },
};

export default glutton;