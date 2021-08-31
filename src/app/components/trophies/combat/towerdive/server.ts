import { TrophyServer } from '../../types';
import base from './base';
import {
  isInEnemyTurretRange,
  getParticipantDeaths,
  getParticipantKills,
} from '../../../../lib/riot/helpers';

const towerdive: TrophyServer = {
  ...base,
  checkProgress: ({ events, participant }) => {
    const deaths = getParticipantDeaths(events, participant.participantId);
    const kills = getParticipantKills(events, participant.participantId);
    const firstTurrentDeath = events.find(
      (event) =>
        event.type === 'BUILDING_KILL' &&
        event.buildingType === 'TOWER_BUILDING'
    );
    if (!firstTurrentDeath) {
      return 0;
    }

    const underTurretKills = kills.filter((kill) => {
      const preFirstTurretDeath = kill.timestamp <= firstTurrentDeath.timestamp;
      const isUnderTurret = isInEnemyTurretRange(
        kill.position,
        participant.teamId === 100 ? 200 : 100
      );
      const notDiedInThe10SecsBeforeOrAfter = !deaths.find(
        (death) =>
          death.timestamp + 10000 >= kill.timestamp &&
          death.timestamp - 10000 < kill.timestamp
      );

      return (
        isUnderTurret && preFirstTurretDeath && notDiedInThe10SecsBeforeOrAfter
      );
    }).length;

    return underTurretKills;
  },
};

export default towerdive;
