import { Trophy } from '../types';
import { getParticipantByAccount } from '../../../api/riot/helpers';

const wizard: Trophy = {
  island: 'combatIsland',
  name: 'wizard',
  level: 'combat4',
  title: 'Wizard',
  description:
    'Deal more magic damage to champions than anyone else total damage to champions.',
  category: 'combat',
  checkProgress: ({ match, account }) => {
    const participant = getParticipantByAccount(match, account);
    const others = match.participants.filter(
      (other) => other.participantId !== participant.participantId
    );
    const maxTotalDamageDealtToChampions = Math.max(
      ...others.map((other) => other.stats.totalDamageDealtToChampions)
    );

    return Number(
      participant.stats.magicDamageDealtToChampions >=
        maxTotalDamageDealtToChampions
    );
  },
};

export default wizard;